import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./pick.js";

test("module loads: object/keys/pick.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/keys/pick.ts", () => {
  const imported = typeof mod.objectKeysPick;
  assert.ok(imported === "function", "module should export function");
});

test("objectKeysPick: basic picking of existing keys", () => {
  const instance = { a: 1, b: 2, c: 3 };
  const keys = ["a", "c"];
  const result = mod.objectKeysPick(instance, keys);
  assert.deepStrictEqual(result, { a: 1, c: 3 });
});

test("objectKeysPick: picking non-existent keys (default behavior)", () => {
  const instance = { a: 1 };
  const keys = ["a", "b"];
  const result = mod.objectKeysPick(instance, keys);
  // Based on code: result[key] = (instance as Record<string, V>)[key];
  // If b is missing in instance, result['b'] will be undefined.
  assert.deepStrictEqual(result, { a: 1, b: undefined });
});

test("objectKeysPick: picking with defineMissing: true for missing keys", () => {
  const instance = { a: 1 };
  const keys = ["a", "b"];
  const result = mod.objectKeysPick(instance, keys, true);
  assert.deepStrictEqual(result, { a: 1, b: undefined });
});

test("objectKeysPick: picking from an empty object", () => {
  const instance = {};
  const keys = ["a", "b"];
  const result = mod.objectKeysPick(instance, keys);
  assert.deepStrictEqual(result, {});
});

test("objectKeysPick: picking from an empty object with defineMissing: true", () => {
  const instance = {};
  const keys = ["a", "b"];
  const result = mod.objectKeysPick(instance, keys, true);
  assert.deepStrictEqual(result, { a: undefined, b: undefined });
});

test("objectKeysPick: picking with an empty keys array", () => {
  const instance = { a: 1 };
  const keys = [];
  const result = mod.objectKeysPick(instance, keys);
  assert.deepStrictEqual(result, {});
});

test("objectKeysPick: picking from null/undefined instance", () => {
  assert.deepStrictEqual(mod.objectKeysPick(null, ["a"]), {});
  assert.deepStrictEqual(mod.objectKeysPick(undefined, ["a"]), {});
});

test("objectKeysPick: returns a new object", () => {
  const instance = { a: 1 };
  const keys = ["a"];
  const result = mod.objectKeysPick(instance, keys);
  assert.notStrictEqual(result, instance);
});

