import test from "node:test";
import assert from "node:assert/strict";
import { arrayToSorted } from "./sorted.js";

test("should sort array elements", () => {
  assert.deepEqual(arrayToSorted([3, 1, 2]), [1, 2, 3]);
});

test("should use compare function", () => {
  assert.deepEqual(arrayToSorted([1, 2, 3], (alpha, beta) => beta - alpha), [3, 2, 1]);
});

test("should return a new array", () => {
  const input = [1, 2];
  const result = arrayToSorted(input);
  assert.notStrictEqual(result, input);
});
