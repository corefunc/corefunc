import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./iterator-symbol.js";

test("module loads: lang/iterator-symbol.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: lang/iterator-symbol.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
