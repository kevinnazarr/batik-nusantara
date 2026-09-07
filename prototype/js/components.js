'use strict';

/* ============================================================
   COMPONENTS — header, drawer, modals, lang, wishlist, cookie (verbatim 3693-3937)
   ============================================================ */

/* ——— HEADER / OVERLAYS ——— */

const header = document.getElementById('siteHeader');
if (header) {
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 4);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* Sticky subnav offset: keep it flush below the actual header height */
const syncHeaderHeight = () => {
  const h = document.getElementById('siteHeader');
  if (h) document.documentElement.style.setProperty('--header-h', `${h.offsetHeight}px`);
};
syncHeaderHeight();
window.addEventListener('resize', syncHeaderHeight);

function openDrawer(el) {
  if (!el) return;
  el.classList.add('is-open');
  document.body.classList.add('no-scroll');
  const focusable = el.querySelector('button, a, input, select, [tabindex]');
  if (focusable) focusable.focus();
}
function closeDrawer(el) {
  if (!el) return;
  el.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
}

const menuDrawer = document.getElementById('menuDrawer');
const menuToggle = document.getElementById('menuToggle');
if (menuToggle && menuDrawer) {
  menuToggle.addEventListener('click', () => {
    const open = menuDrawer.classList.contains('is-open');
    if (open) { closeDrawer(menuDrawer); menuToggle.setAttribute('aria-expanded', 'false'); }
    else { openDrawer(menuDrawer); menuToggle.setAttribute('aria-expanded', 'true'); }
  });
  menuDrawer.addEventListener('click', (e) => {
    if (e.target.closest('[data-close-drawer]') || e.target.closest('.drawer__nav a')) {
      closeDrawer(menuDrawer);
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus();
    }
  });
}

let lastFocused = null;
function openModal(el, focusTarget) {
  if (!el) return;
  lastFocused = document.activeElement;
  el.classList.add('is-open');
  document.body.classList.add('no-scroll');
  const target = focusTarget || el.querySelector('input, button, a, [tabindex]');
  if (target) target.focus();
}
function closeModal(el) {
  if (!el) return;
  el.classList.remove('is-open');
  document.body.classList.remove('no-scroll');
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}

document.querySelectorAll('[data-close-modal]').forEach((el) => {
  el.addEventListener('click', () => closeModal(el.closest('.modal')));
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  document.querySelectorAll('.modal.is-open').forEach(closeModal);
  if (menuDrawer && menuDrawer.classList.contains('is-open')) closeDrawer(menuDrawer);
  const fd = document.querySelector('#app .filters__drawer.is-open');
  if (fd) closeDrawer(fd);
  if (typeof setLangMenu === 'function') setLangMenu(false);
});

/* ——— LANGUAGE SWITCHER ——— */

const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const LANGS = { en: 'English', id: 'Indonesia' };
let currentLang = 'en';
try { currentLang = localStorage.getItem('serat:lang') || 'en'; } catch (err) { /* storage blocked */ }
if (!LANGS[currentLang]) currentLang = 'en';

function applyLang(lang) {
  if (!LANGS[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  try { localStorage.setItem('serat:lang', lang); } catch (err) { /* storage blocked */ }
  if (langMenu) {
    langMenu.querySelectorAll('.lang-menu__item').forEach((item) => {
      const active = item.dataset.lang === currentLang;
      item.setAttribute('aria-checked', String(active));
      item.classList.toggle('is-selected', active);
    });
  }
}

function setLangMenu(open) {
  if (!langMenu) return;
  langMenu.hidden = !open;
  if (langBtn) langBtn.setAttribute('aria-expanded', String(open));
}

if (langBtn && langMenu) {
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    setLangMenu(langMenu.hidden);
  });
  langMenu.addEventListener('click', (e) => {
    const item = e.target.closest('.lang-menu__item');
    if (!item) return;
    applyLang(item.dataset.lang);
    setLangMenu(false);
    langBtn.focus();
  });
  langMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { setLangMenu(false); langBtn.focus(); }
  });
}

document.addEventListener('click', (e) => {
  const sw = document.querySelector('.lang-switcher');
  if (sw && !sw.contains(e.target)) setLangMenu(false);
});

applyLang(currentLang);

/* ——— WISHLIST MODAL ——— */

const wishlistModal = document.getElementById('wishlistModal');
const wishlistBtn = document.getElementById('wishlistBtn');
const wishlistResults = document.getElementById('wishlistResults');

function renderWishlistModal() {
  if (!wishlistResults) return;
  const products = Store.getWishlist().map(getProductById).filter(Boolean);
  if (!products.length) {
    wishlistResults.innerHTML = '<p class="search__empty">Your wishlist is empty.<br>Tap the heart on any piece to save it here.</p>';
    return;
  }
  wishlistResults.innerHTML = products.map((p) => `
      <div class="wishlist-row">
        <img src="${imgURL(p.image, 300)}" alt="" width="64" height="84" loading="lazy">
        <div>
          <a class="wishlist-row__name" href="product.html?id=${p.id}">${p.name}</a>
          <div class="search-result__cat">${getCategoryLabel(p.category)}</div>
        </div>
        <div style="display:flex;align-items:center;gap:12px">
          <span class="wishlist-row__price">${formatIDR(p.price)}</span>
          <button class="wishlist-row__remove js-wishlist-remove" data-id="${p.id}" aria-label="Remove ${p.name} from wishlist">Remove</button>
        </div>
      </div>`).join('');
}

function openWishlistModal() {
  if (!wishlistModal) return;
  renderWishlistModal();
  openModal(wishlistModal);
}
if (wishlistBtn) wishlistBtn.addEventListener('click', openWishlistModal);

/* ——— ACCOUNT (demo) ——— */

const accountBtn = document.getElementById('accountBtn');
if (accountBtn) {
  accountBtn.addEventListener('click', () => {
    showToast('Accounts are part of the demo — explore the collection instead', { label: 'Shop', href: 'shop.html' });
  });
}

/* ——— COOKIE BANNER ——— */

const cookieBanner = document.getElementById('cookieBanner');
const cookieClose = document.getElementById('cookieClose');
if (cookieBanner) {
  let dismissed = false;
  try { dismissed = localStorage.getItem('serat.cookie.v1') === '1'; } catch (e) {}
  if (!dismissed) setTimeout(() => cookieBanner.classList.add('is-visible'), 1200);
  if (cookieClose) {
    cookieClose.addEventListener('click', () => {
      cookieBanner.classList.remove('is-visible');
      try { localStorage.setItem('serat.cookie.v1', '1'); } catch (e) {}
    });
  }
}

/* ——— LEGACY ROUTE REDIRECTS ——— */

const ROUTE_PAGES = {
  '': 'index.html',
  home: 'index.html',
  story: 'index.html#story',
  artisans: 'index.html#artisans',
  motifs: 'index.html#motifs',
  shop: 'shop.html',
  product: 'product.html',
  cart: 'cart.html',
};

function redirectLegacyRoute() {
  const h = window.location.hash || '';
  if (!h.startsWith('#/')) return;
  const queryless = h.replace(/^#\/?/, '');
  const [pathPart, queryPart] = queryless.split('?');
  const segs = pathPart.split('/').filter(Boolean);
  const name = segs[0] || 'home';
  const target = ROUTE_PAGES[name];
  if (!target) return;
  let url = target;
  if (name === 'product' && segs[1]) url = `product.html?id=${segs[1]}`;
  else if (queryPart && target.endsWith('.html')) url = `${target}?${queryPart}`;
  const here = window.location.pathname.split('/').pop() || 'index.html';
  if (url === here) return;
  window.location.replace(url);
}

redirectLegacyRoute();

/* ——— SHARED API FOR PAGE SCRIPTS ——— */

window.Serat = {
  PRODUCTS,
  COLORS,
  Store,
  showToast,
  renderGrid,
  renderProductCard,
  imgURL,
  formatIDR,
  getProductById,
  getCategoryLabel,
  getMotif,
  starWidth,
  wishlistIcon,
  openModal,
  closeModal,
  openDrawer,
  closeDrawer,
  openWishlistModal,
  refreshCounts,
};
