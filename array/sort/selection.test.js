import test from "node:test";
import assert from "node:assert/strict";
import { arraySortSelection } from "./selection.js";

test("should sort numbers in ascending order", () => {
  assert.deepEqual(arraySortSelection([5, 3, 8, 1, 2]), [1, 2, 3, 5, 8]);
});

test("should handle already sorted array", () => {
  assert.deepEqual(arraySortSelection([1, 2, 3]), [1, 2, 3]);
});

test("should handle empty array", () => {
  assert.deepEqual(arraySortSelection([]), []);
});
