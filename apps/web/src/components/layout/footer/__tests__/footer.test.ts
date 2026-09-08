import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const footerPath = join(process.cwd(), "src/components/layout/footer/index.tsx");
const layoutPath = join(process.cwd(), "src/app/layout.tsx");
const src = readFileSync(footerPath, "utf8");
const layoutSrc = readFileSync(layoutPath, "utf8");

describe("layout/footer component", () => {
  it("exists at requested path", () => {
    assert.ok(src.length > 500);
  });

  it("structure mirrors navbar (data + component + layout)", () => {
    assert.match(src, /from "@\/data\/components\/footer"/);
    assert.match(src, /FOOTER_BRAND/);
    assert.match(src, /FOOTER_COLUMNS/);
    assert.match(layoutSrc, /from "@\/components\/layout\/footer"/);
    assert.match(layoutSrc, /<Footer \/>/);
  });

  it("uses prototype tokens", () => {
    assert.match(src, /bg-mountain-slate/);
    assert.match(src, /text-snow-white/);
    assert.match(src, /honey-gold/);
  });

  it("responsive grid like prototype", () => {
    assert.match(src, /grid-cols-1/);
    assert.match(src, /md:grid-cols-2/);
    assert.match(src, /lg:grid-cols/);
  });

  it("has accessibility", () => {
    assert.match(src, /aria-label/);
  });
});
