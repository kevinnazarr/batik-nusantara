import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import { NAV_LINKS } from "./index.ts";

describe("navigation data", () => {
  it("NAV_LINKS is array with expected shape", () => {
    assert.ok(Array.isArray(NAV_LINKS), "NAV_LINKS must be array");
    assert.equal(NAV_LINKS.length, 4);
    for (const link of NAV_LINKS) {
      assert.equal(typeof link.label, "string");
      assert.equal(typeof link.href, "string");
      assert.ok(link.label.length > 0);
      assert.ok(link.href.startsWith("/"), `href must start with /: ${link.href}`);
    }
  });

  it("contains required hrefs", () => {
    const hrefs = NAV_LINKS.map((l) => l.href);
    assert.ok(hrefs.includes("/shop"), "should contain /shop");
    assert.ok(hrefs.includes("/stories"), "should contain /stories");
  });

  it("labels are unique", () => {
    const labels = NAV_LINKS.map((l) => l.label);
    assert.equal(new Set(labels).size, labels.length, "labels must be unique");
  });

  it("logo asset exists in public/brand", () => {
    const logoPath = join(process.cwd(), "public/brand/logo-batik-nusantara.webp");
    assert.ok(existsSync(logoPath), `logo missing at ${logoPath}`);
    assert.ok(statSync(logoPath).size > 10000, "logo file too small");
  });

  it("favicon asset exists in public", () => {
    const favPath = join(process.cwd(), "public/favicon.webp");
    assert.ok(existsSync(favPath), `favicon missing at ${favPath}`);
  });
});
