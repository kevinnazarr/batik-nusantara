import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const ctxPath = join(here, "..", "context.tsx");

describe("i18n context", () => {
  it("context.tsx exists", () => {
    assert.equal(existsSync(ctxPath), true);
  });

  it("exposes LocaleContext with id default and setLocale", () => {
    const src = readFileSync(ctxPath, "utf8");
    assert.match(src, /DEFAULT_LOCALE/);
    assert.match(src, /setLocale/);
    assert.match(src, /useI18n/);
    assert.match(src, /I18nProvider/);
    assert.match(src, /document\.documentElement\.lang/);
    assert.match(src, /localStorage/);
  });
});
