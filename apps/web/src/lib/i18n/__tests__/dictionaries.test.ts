import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { join } from "node:path";

describe("i18n dictionaries", () => {
  it("dictionaries module exists", () => {
    const p = join(process.cwd(), "src/lib/i18n/dictionaries.ts");
    assert.ok(existsSync(p), `missing at ${p}`);
  });

  it("exports locales + getter with id/en parity", async () => {
    const mod = await import("../dictionaries.ts");
    assert.deepEqual([...mod.LOCALES], ["id", "en"]);
    assert.equal(mod.DEFAULT_LOCALE, "id");
    const id = mod.getDictionary("id");
    const en = mod.getDictionary("en");
    for (const key of ["nav", "hero", "footer", "common"] as const) {
      assert.ok(id[key], `id missing ${key}`);
      assert.ok(en[key], `en missing ${key}`);
    }
    assert.ok(id.nav.links[0]?.label.length > 0);
    assert.notEqual(id.nav.links[0]?.label, en.nav.links[0]?.label);
    assert.notEqual(id.hero.title.accent, en.hero.title.accent);
  });
});
