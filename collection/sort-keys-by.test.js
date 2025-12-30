import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./sort-keys-by.js";

test("module loads: collection/sort-keys-by.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: collection/sort-keys-by.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
