import test from "node:test";
import assert from "node:assert/strict";
import { arrayGetSymmetricDifference } from "./symmetric-difference.js";

test("should return symmetric difference", () => {
  assert.deepEqual(arrayGetSymmetricDifference([1, 2, 3], [2, 3, 4]), [1, 4]);
});

test("should return union if no overlap", () => {
  assert.deepEqual(arrayGetSymmetricDifference([1, 2], [3, 4]), [1, 2, 3, 4]);
});

test("should return empty array if arrays are identical", () => {
  assert.deepEqual(arrayGetSymmetricDifference([1, 2], [1, 2]), []);
});
