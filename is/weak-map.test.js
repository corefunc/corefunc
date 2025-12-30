import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./weak-map.js";

test("module loads: is/weak-map.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/weak-map.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isWeakMap with WeakMap", () => {
  assert.strictEqual(mod.isWeakMap(new WeakMap()), true);
});

test("isWeakMap with Map", () => {
  assert.strictEqual(mod.isWeakMap(new Map()), false);
});
