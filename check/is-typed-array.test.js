import test from "node:test";
import assert from "node:assert/strict";
import { checkIsTypedArray } from "./is-typed-array.js";

test("should return true for typed arrays", () => {
  assert.strictEqual(checkIsTypedArray(new Int16Array(1)), true);
  assert.strictEqual(checkIsTypedArray(new Float64Array(1)), true);
  assert.strictEqual(checkIsTypedArray(new Uint8Array(1)), true);
});

test("should return false for regular arrays", () => {
  assert.strictEqual(checkIsTypedArray([]), false);
});

test("should return false for non-array values", () => {
  assert.strictEqual(checkIsTypedArray({}), false);
  assert.strictEqual(checkIsTypedArray(null), false);
  assert.strictEqual(checkIsTypedArray("abc"), false);
});
