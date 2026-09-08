import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const heroPath = join(process.cwd(), "src/components/page/home/hero.tsx");
const dataPath = join(process.cwd(), "src/data/page/home.ts");
const hookPath = join(process.cwd(), "src/components/page/home/hooks/useHeroSlideshow.ts");
const src = readFileSync(heroPath, "utf8");
const dataSrc = readFileSync(dataPath, "utf8");
const hookSrc = readFileSync(hookPath, "utf8");

describe("Home/Hero 100vh", () => {
  it("exists at requested path", () => {
    assert.ok(src.length > 500, "hero.tsx too small");
    assert.ok(dataSrc.length > 300, "data/page/home.ts too small");
    assert.ok(hookSrc.length > 50, "hook too small");
  });

  it("is full viewport height", () => {
    assert.match(src, /min-h-\[100dvh\]/);
    assert.match(src, /min-h-screen/);
  });

  it("follows prototype layout & visual", () => {
    assert.match(src, /absolute inset-0/);
    assert.match(src, /rgba\(15,47,58,0\.38\)/);
    assert.match(src, /max-w-\[760px\]/);
    assert.match(dataSrc, /Batik,/);
    assert.match(dataSrc, /Reimagined/);
    assert.match(dataSrc, /Explore the Collection/);
    assert.match(dataSrc, /Discover Our Story/);
    assert.doesNotMatch(src, /HELLO WORLD/);
  });

  it("data static terpisah di data/page/home", () => {
    assert.match(src, /from "@\/data\/page\/home"/);
    assert.match(dataSrc, /HERO_DATA/);
    assert.match(dataSrc, /backgrounds/);
    assert.match(dataSrc, /https:\/\/images\.unsplash\.com/);
  });

  it("animasi terpisah di subfolder hooks (static dulu)", () => {
    assert.match(src, /from ".\/hooks\/useHeroSlideshow"/);
    assert.match(hookSrc, /useHeroSlideshow/);
    assert.match(hookSrc, /useState/);
  });

  it("typography & colors follow prototype tokens", () => {
    assert.match(src, /var\(--color-mountain-slate\)/);
    assert.match(src, /var\(--color-honey-gold\)/);
    assert.match(src, /var\(--color-snow-white\)/);
    assert.match(src, /clamp\(44px,7vw,68px\)/);
    assert.match(src, /max-w-\[46ch\]/);
  });

  it("CTAs link correctly via data", () => {
    assert.match(dataSrc, /\/shop/);
    assert.match(dataSrc, /\/stories/);
  });

  it("has motif strip & accessibility", () => {
    assert.match(src, /aria-labelledby="heroTitle"/);
    assert.match(src, /h-\[10px\]/);
  });
});
