import test from "node:test";
import assert from "node:assert/strict";
import { arrayGetDifference } from "./difference.js";

test("should return difference between two arrays", () => {
  assert.deepEqual(arrayGetDifference([1, 2, 3], [2, 4]), [1, 3]);
});

test("should return first array if second is empty", () => {
  assert.deepEqual(arrayGetDifference([1, 2], []), [1, 2]);
});

test("should return empty array if all elements are excluded", () => {
  assert.deepEqual(arrayGetDifference([1, 2], [1, 2, 3]), []);
});
