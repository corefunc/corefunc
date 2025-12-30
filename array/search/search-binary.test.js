import test from "node:test";
import assert from "node:assert/strict";
import { arraySearchBinary } from "./search-binary.js";

test("should find target in sorted array", () => {
  assert.strictEqual(arraySearchBinary([1, 2, 3, 4, 5], 3) !== -1, true);
});

test("should return -1 if target not found", () => {
  assert.strictEqual(arraySearchBinary([1, 2, 3, 4, 5], 6), -1);
});

test("should handle empty array", () => {
  assert.strictEqual(arraySearchBinary([], 1), -1);
});
