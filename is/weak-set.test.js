import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./weak-set.js";

test("module loads: is/weak-set.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/weak-set.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isWeakSet with WeakSet", () => {
  assert.strictEqual(mod.isWeakSet(new WeakSet()), true);
});

test("isWeakSet with Set", () => {
  assert.strictEqual(mod.isWeakSet(new Set()), false);
});
