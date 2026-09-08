import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  FOOTER_CONTACT,
  FOOTER_NAV_COLUMNS,
  FOOTER_NEWSLETTER,
  FOOTER_BOTTOM,
  FOOTER_SOCIAL,
} from "../index.ts";

describe("footer data", () => {
  it("contact has required fields", () => {
    assert.ok(FOOTER_CONTACT.name.length > 0);
    assert.ok(FOOTER_CONTACT.address.length > 0);
    assert.ok(FOOTER_CONTACT.phone.length > 0);
    assert.ok(FOOTER_CONTACT.email.length > 0);
  });

  it("nav columns follow layout", () => {
    assert.equal(FOOTER_NAV_COLUMNS.length, 2);
    const titles = FOOTER_NAV_COLUMNS.map((c) => c.title);
    assert.ok(titles.includes("Shop"));
    assert.ok(titles.includes("Explore"));
    for (const col of FOOTER_NAV_COLUMNS) {
      assert.ok(col.links.length > 0);
      for (const link of col.links) {
        assert.ok(link.label.length > 0);
        assert.ok(link.href.length > 0);
      }
    }
  });

  it("newsletter has required fields", () => {
    assert.ok(FOOTER_NEWSLETTER.heading.length > 10);
    assert.ok(FOOTER_NEWSLETTER.buttonText.length > 0);
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
    assert.match(src, /FOOTER_CONTACT/);
    assert.match(src, /FOOTER_NAV_COLUMNS/);
    assert.match(src, /FOOTER_NEWSLETTER/);
  });
});
