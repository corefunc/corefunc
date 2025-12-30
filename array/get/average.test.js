import test from "node:test";
import assert from "node:assert/strict";
import { arrayGetAverage } from "./average.js";

test("should return average of numbers", () => {
  assert.strictEqual(arrayGetAverage([1, 2, 3, 4]), 2.5);
});

test("should return average for single element", () => {
  assert.strictEqual(arrayGetAverage([10]), 10);
});

test("should handle negative numbers", () => {
  assert.strictEqual(arrayGetAverage([-1, 1]), 0);
});
