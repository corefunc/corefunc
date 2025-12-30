import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicHasSame } from "./has-same.js";

test("should return true if arrays have at least one common element", () => {
  assert.strictEqual(arrayBasicHasSame([1, 2], [2, 3]), true);
});

test("should return false if arrays have no common elements", () => {
  assert.strictEqual(arrayBasicHasSame([1, 2], [3, 4]), false);
});

test("should return false if one array is empty", () => {
  assert.strictEqual(arrayBasicHasSame([], [1, 2]), false);
  assert.strictEqual(arrayBasicHasSame([1, 2], []), false);
});
