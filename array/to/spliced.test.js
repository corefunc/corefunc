import test from "node:test";
import assert from "node:assert/strict";
import { arrayToSpliced } from "./spliced.js";

test("should splice array elements and return new array", () => {
  assert.deepEqual(arrayToSpliced([1, 2, 3, 4], 1, 2, 5, 6), [1, 5, 6, 4]);
});

test("should return a new array", () => {
  const input = [1, 2];
  const result = arrayToSpliced(input, 0, 0);
  assert.notStrictEqual(result, input);
});

test("should handle adding elements without deletion", () => {
  assert.deepEqual(arrayToSpliced([1, 2], 1, 0, 3), [1, 3, 2]);
});
