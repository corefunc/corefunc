import test from "node:test";
import assert from "node:assert/strict";
import { arrayMakeSum } from "./sum.js";

test("should sum numbers in array", () => {
  assert.strictEqual(arrayMakeSum([1, 2, 3]), 6);
});

test("should ignore non-finite values", () => {
  assert.strictEqual(arrayMakeSum([1, NaN, 2, Infinity, 3]), 6);
});

test("should handle negative numbers", () => {
  assert.strictEqual(arrayMakeSum([-1, 5, -2]), 2);
});
