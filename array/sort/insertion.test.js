import test from "node:test";
import assert from "node:assert/strict";
import { arraySortInsertion } from "./insertion.js";

test("should sort numbers in ascending order", () => {
  assert.deepEqual(arraySortInsertion([5, 3, 8, 1, 2]), [1, 2, 3, 5, 8]);
});

test("should handle already sorted array", () => {
  assert.deepEqual(arraySortInsertion([1, 2, 3]), [1, 2, 3]);
});

test("should handle empty array", () => {
  assert.deepEqual(arraySortInsertion([]), []);
});
