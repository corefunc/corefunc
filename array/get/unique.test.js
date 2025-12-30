import test from "node:test";
import assert from "node:assert/strict";
import { arrayGetUnique } from "./unique.js";

test("should return unique elements", () => {
  const result = arrayGetUnique([1, 2, 2, 3, 1], false);
  assert.deepEqual(result, [1, 2, 3]);
});

test("should sort elements by default", () => {
  const result = arrayGetUnique([3, 1, 2, 1]);
  assert.deepEqual(result, [1, 2, 3]);
});

test("should handle empty array", () => {
  assert.deepEqual(arrayGetUnique([]), []);
});
