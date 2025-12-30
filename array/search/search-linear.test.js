import test from "node:test";
import assert from "node:assert/strict";
import { arraySearchLinear } from "./search-linear.js";

test("should find target in array", () => {
  assert.strictEqual(arraySearchLinear([10, 20, 30], 20), 1);
});

test("should return -1 if target not found", () => {
  assert.strictEqual(arraySearchLinear([1, 2, 3], 4), -1);
});

test("should handle empty array", () => {
  assert.strictEqual(arraySearchLinear([], 1), -1);
});
