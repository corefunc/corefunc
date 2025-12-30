import test from "node:test";
import assert from "node:assert/strict";
import { arrayToReversed } from "./reversed.js";

test("should reverse array elements", () => {
  assert.deepEqual(arrayToReversed([1, 2, 3]), [3, 2, 1]);
});

test("should return a new array", () => {
  const input = [1, 2];
  const result = arrayToReversed(input);
  assert.notStrictEqual(result, input);
});

test("should handle empty array", () => {
  assert.deepEqual(arrayToReversed([]), []);
});
