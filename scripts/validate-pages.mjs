/* ============================================================
   validate-pages.mjs — static validation for the per-page HTML
   refactor of the Serat Batik Atelier preview (proto/).

   Run:  node scripts/validate-pages.mjs
   Exit: 0 on success, 1 when any check fails.
   ============================================================ */
'use strict';

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = 'proto';

const BASE_PAGES = ['index.html', 'shop.html', 'product.html', 'cart.html'];
const GENERATED_PAGES = readdirSync(resolve(ROOT, DIR))
  .filter((f) => /^product-\d+\.html$/.test(f))
  .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
const PAGES = [...BASE_PAGES, ...GENERATED_PAGES];
const FILES = readdirSync(resolve(ROOT, DIR)).filter((f) => f.endsWith('.html'));

let failures = 0;
const fail = (msg) => { failures += 1; console.error(`  ✗ ${msg}`); };
const ok = (msg) => console.log(`  ✓ ${msg}`);

const read = (p) => readFileSync(resolve(ROOT, DIR, p), 'utf8');

/* ——— Extract blocks ——— */

const inlineScripts = (html) => [...html.matchAll(/<script(?![^>]*src=)[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
const inlineStyles = (html) => [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) => m[1]);
const bodyMarkup = (html) => {
  const m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!m) return '';
  // inline scripts live inside <body>; remove them so template-string
  // interpolations are not treated as markup
  return m[1].replace(/<script[\s\S]*?<\/script>/gi, '');
};
const idsInMarkup = (html) => new Set([...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]));
const idsInJs = (js) => new Set([...js.matchAll(/getElementById\('([^']+)'\)/g)].map((m) => m[1]));

/* ——— 1. JS syntax ——— */

console.log('\n[1] JavaScript syntax');
for (const page of PAGES) {
  const html = read(page);
  const scripts = inlineScripts(html);
  if (scripts.length !== 1) { fail(`${page} — expected exactly 1 inline <script>, found ${scripts.length}`); continue; }
  try { new vm.Script(scripts[0], { filename: `${page}#inline-script` }); ok(`${page} — inline script syntax OK`); }
  catch (e) { fail(`${page} — ${e.message}`); }
}

/* ——— 2. Style block + brace balance ——— */

console.log('\n[2] Style blocks / brace balance');
for (const f of PAGES) {
  const css = inlineStyles(read(f)).join('\n');
  if (!css.trim()) { fail(`${f} — page <style> block is empty`); continue; }
  const open = (css.match(/\{/g) || []).length;
  const close = (css.match(/\}/g) || []).length;
  if (open !== close) fail(`${f} — brace balance ${open} vs ${close}`);
  else ok(`${f} — brace balance OK (${open})`);
}

/* ——— 3. Structure: chrome IDs present on every page ——— */

console.log('\n[3] Shared chrome present on every page');
const CHROME_IDS = [
  'siteHeader', 'menuToggle', 'menuDrawer', 'langBtn', 'langMenu',
  'wishlistBtn', 'wishlistModal', 'wishlistResults', 'accountBtn',
  'cookieBanner', 'cookieClose', 'toastRegion', 'app',
];
for (const page of PAGES) {
  const ids = idsInMarkup(read(page));
  const missing = CHROME_IDS.filter((id) => !ids.has(id));
  if (missing.length) fail(`${page} — missing chrome ids: ${missing.join(', ')}`);
  else ok(`${page} — chrome complete`);
}

/* ——— 4. Internal links + anchors ——— */

console.log('\n[4] Internal links and anchors');
const anchorIds = (page) => {
  const html = read(page);
  const markup = idsInMarkup(html);
  // Dynamic ids created by page JS (product/cart render templates)
  const js = inlineScripts(html).join('\n');
  for (const m of js.matchAll(/\bid="(\$\{?[^"}]*)"/g)) markup.add(m[1]);
  return markup;
};
// A templated link (e.g. product-${p.id}.html built by JS) is valid when at
// least one concrete file matches the pattern with ${...} replaced by digits.
const templatedTargetExists = (file) => {
  const escaped = file.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const re = new RegExp('^' + escaped.replace(/\\\$\{[^}]*\\\}/g, '\\d+') + '$');
  return FILES.some((f) => re.test(f));
};
for (const page of PAGES) {
  const html = read(page);
  const links = [...html.matchAll(/href="([^"#]+\.html)(#[^"]*)?"/g)].map((m) => ({ file: m[1], anchor: (m[2] || '').replace('#', '') }));
  if (!links.length) { fail(`${page} — no internal .html links found`); continue; }
  let bad = 0;
  for (const { file, anchor } of links) {
    const templated = file.includes('${');
    if (templated ? !templatedTargetExists(file) : !existsSync(resolve(ROOT, DIR, file))) {
      fail(`${page} — links to missing file ${file}`); bad++; continue;
    }
    if (anchor && !templated && !anchorIds(file).has(anchor)) {
      fail(`${page} — link ${file}#${anchor}: anchor not found on target`); bad++;
    }
  }
  if (!bad) ok(`${page} — ${links.length} internal links verified`);
}

// Legacy hash-route leaks (old SPA hrefs must not remain in page markup)
for (const page of PAGES) {
  const html = read(page);
  const leaks = [...html.matchAll(/href="#\/([^"]*)"/g)];
  if (leaks.length) fail(`${page} — legacy hash-route hrefs remain: ${leaks.map((m) => `#/${m[1]}`).join(', ')}`);
  else ok(`${page} — no legacy #/ links`);
}

/* ——— 5. JS id references resolve ——— */

console.log('\n[5] getElementById targets');
for (const page of PAGES) {
  const html = read(page);
  const js = inlineScripts(html).join('\n');
  const referenced = idsInJs(js);
  const available = idsInMarkup(html);
  // ids that render() creates dynamically also live inside the same JS source
  const createdAtRuntime = new Set([...js.matchAll(/id="([^"]+)"/g)].map((m) => m[1]));
  const missing = [...referenced].filter((id) => !available.has(id) && !createdAtRuntime.has(id));
  if (missing.length) fail(`${page} — JS references missing ids: ${missing.join(', ')}`);
  else ok(`${page} — all JS id targets resolve`);
}

/* ——— 6. CSS class coverage for static markup ——— */

console.log('\n[6] CSS class coverage (static markup)');
const classNamesIn = (text) => new Set([...text.matchAll(/class="([^"]+)"/g)].flatMap((m) => m[1].split(/\s+/)).filter(Boolean));

// Global/base CSS is inlined on every page, so any page's styles cover the shared classes
const globalCss = PAGES.map((p) => inlineStyles(read(p)).join('\n')).join('\n');
const declaredSelectors = (css) => {
  const sels = css.match(/[^{}]+(?=\{)/g) || [];
  const names = new Set();
  for (const s of sels) {
    for (const m of s.matchAll(/\.([A-Za-z_][\w-]*)/g)) names.add(m[1]);
  }
  return names;
};
const GLOBAL_SELECTORS = declaredSelectors(globalCss);

for (const page of PAGES) {
  const html = read(page);
  const css = inlineStyles(html).join('\n');
  const pageSelectors = declaredSelectors(css);
  const classes = classNamesIn(bodyMarkup(html));
  const missing = [...classes].filter((c) => !GLOBAL_SELECTORS.has(c) && !pageSelectors.has(c));
  if (missing.length) fail(`${page} — classes with no CSS: ${[...new Set(missing)].join(', ')}`);
  else ok(`${page} — ${classes.size} classes covered`);
}

/* ——— 7. Page-specific CSS non-bleed (spot check) ——— */

console.log('\n[7] Page CSS isolation sanity');
const pageOnlyBlocks = {
  'index.html': ['hero', 'subnav', 'tile', 'promo', 'artisan', 'testimonial', 'motif', 'newsletter', 'pullquote', 'medallion', 'featured-grid', 'category-grid', 'home-best', 'story-band', 'scroll-hint'],
  // NOTE: .shop-empty lives in the inlined global CSS — shared by shop + product (not-found state)
  'shop.html': ['shop-layout', 'filters', 'shop-toolbar', 'shop-search', 'search__input', 'load-more', 'filter-toggle'],
  'product.html': ['pdp', 'gallery', 'swatch', 'accordion', 'editorial-card', 'option-group'],
  'cart.html': ['cart-layout', 'cart-item', 'cart-summary', 'discount-form', 'cart-empty'],
};
for (const [page, blocks] of Object.entries(pageOnlyBlocks)) {
  const css = inlineStyles(read(page)).join('\n');
  const missing = blocks.filter((b) => !css.includes(`.${b}`));
  if (missing.length) fail(`${page} — expected page CSS missing: ${missing.join(', ')}`);
  else ok(`${page} — page CSS blocks present`);
}

/* ——— 8. Generated product pages consistency ——— */

console.log('\n[8] Generated product pages');
if (!GENERATED_PAGES.length) {
  fail('no product-N.html files found — run scripts/generate-product-pages.mjs');
} else {
  for (const page of GENERATED_PAGES) {
    const html = read(page);
    const id = Number(page.match(/\d+/)[0]);
    const title = (html.match(/<title>([^<]+)<\/title>/) || [])[1];
    const hasFixedRender = html.includes(`renderProduct(${id});`);
    const hasDynamicTail = html.includes("params.get('id')");
    const problems = [];
    if (hasDynamicTail) problems.push('still reads ?id= from the query string');
    if (!hasFixedRender) problems.push(`missing fixed renderProduct(${id}) call`);
    if (!title || title === 'Product — Serat Batik Atelier') problems.push('generic title (expected product name)');
    if (problems.length) fail(`${page} — ${problems.join('; ')}`);
    else ok(`${page} — "${title}" (fixed id ${id})`);
  }
}

/* ——— Summary ——— */

console.log('');
if (failures) {
  console.error(`VALIDATION FAILED — ${failures} issue(s)`);
  process.exit(1);
}
console.log('VALIDATION PASSED — all checks green');