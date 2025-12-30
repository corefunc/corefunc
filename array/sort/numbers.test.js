import test from "node:test";
import assert from "node:assert/strict";
import { arraySortNumbers } from "./numbers.js";

test("should sort numbers in ascending order", () => {
  assert.deepEqual(arraySortNumbers([5, 3, 8, 1, 2]), [1, 2, 3, 5, 8]);
});

test("should return a new array", () => {
  const input = [3, 1, 2];
  const result = arraySortNumbers(input);
  assert.notStrictEqual(result, input);
});

test("should handle empty array", () => {
  assert.deepEqual(arraySortNumbers([]), []);
});
