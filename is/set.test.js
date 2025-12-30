import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./set.js";

test("module loads: is/set.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/set.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isSet with Set", () => {
  assert.strictEqual(mod.isSet(new Set()), true);
});

test("isSet with array", () => {
  assert.strictEqual(mod.isSet([]), false);
});
