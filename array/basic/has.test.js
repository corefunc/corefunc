import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicHas } from "./has.js";

test("should return true if array contains value", () => {
  assert.strictEqual(arrayBasicHas([1, 2, 3], 2), true);
});

test("should return false if array does not contain value", () => {
  assert.strictEqual(arrayBasicHas([1, 2, 3], 4), false);
});

test("should support fromIndex", () => {
  assert.strictEqual(arrayBasicHas([1, 2, 3, 2], 2, 2), true);
  assert.strictEqual(arrayBasicHas([1, 2, 3, 2], 1, 1), false);
});
