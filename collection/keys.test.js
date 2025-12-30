import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./keys.js";

test("module loads: collection/keys.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: collection/keys.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("collectionKeys with array", () => {
  assert.deepEqual(mod.collectionKeys([1, 2, 3]), [0, 1, 2]);
});

test("collectionKeys with object", () => {
  assert.deepEqual(mod.collectionKeys({ a: 1, b: 2 }), ["a", "b"]);
});

test("collectionKeys with null", () => {
  assert.deepEqual(mod.collectionKeys(null), []);
});
