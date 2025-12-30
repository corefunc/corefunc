import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./values.js";

test("module loads: collection/values.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: collection/values.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("collectionValues with array", () => {
  assert.deepEqual(mod.collectionValues([1, 2, 3]), [1, 2, 3]);
});

test("collectionValues with object", () => {
  assert.deepEqual(mod.collectionValues({ a: 1, b: 2 }), [1, 2]);
});

test("collectionValues with null", () => {
  assert.deepEqual(mod.collectionValues(null), []);
});
