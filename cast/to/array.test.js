import test from "node:test";
import assert from "node:assert/strict";
import { castToArray } from "./array.js";

test("should convert value to array", () => {
  assert.deepEqual(castToArray([1, 2]), [1, 2]);
});

test("should handle null and undefined", () => {
  assert.deepEqual(castToArray(null), []);
  assert.deepEqual(castToArray(undefined), []);
});

test("should convert object values to array", () => {
  assert.deepEqual(castToArray({ a: 1, b: 2 }), [1, 2]);
});
