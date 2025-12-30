import test from "node:test";
import assert from "node:assert/strict";
import { arrayFlatUnique } from "./unique.js";

test("should merge arrays and make them flat and unique", () => {
  assert.deepEqual(arrayFlatUnique([1, [2]], [2, 3], [[4]]), [1, 2, 3, 4]);
});

test("should handle non-array arguments", () => {
  assert.deepEqual(arrayFlatUnique(1, 2, [3]), [1, 2, 3]);
});

test("should return empty array for no arguments", () => {
  assert.deepEqual(arrayFlatUnique(), []);
});
