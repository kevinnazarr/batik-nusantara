import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { FOOTER_BRAND, FOOTER_COLUMNS, FOOTER_BOTTOM, FOOTER_SOCIAL } from "../index.ts";

describe("footer data", () => {
  it("brand has required fields", () => {
    assert.ok(FOOTER_BRAND.monogram.length > 0);
    assert.ok(FOOTER_BRAND.word.length > 0);
    assert.ok(FOOTER_BRAND.description.length > 20);
  });

  it("columns follow prototype", () => {
    assert.equal(FOOTER_COLUMNS.length, 3);
    const titles = FOOTER_COLUMNS.map((c) => c.title);
    assert.ok(titles.includes("Shop"));
    assert.ok(titles.includes("Atelier"));
    assert.ok(titles.includes("Support"));
    for (const col of FOOTER_COLUMNS) {
      assert.ok(col.links.length > 0);
      for (const link of col.links) {
        assert.ok(link.label.length > 0);
        assert.ok(link.href.length > 0);
      }
    }
  });

  it("bottom has copyright and links", () => {
    assert.match(FOOTER_BOTTOM.copyright, /2026/);
    assert.equal(FOOTER_BOTTOM.links.length, 3);
  });

  it("social has 3 items", () => {
    assert.equal(FOOTER_SOCIAL.length, 3);
  });

  it("file exists at data/components/footer", () => {
    const p = join(process.cwd(), "src/data/components/footer/index.ts");
    const src = readFileSync(p, "utf8");
    assert.match(src, /FOOTER_BRAND/);
    assert.match(src, /FOOTER_COLUMNS/);
  });
});
