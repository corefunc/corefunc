import test from "node:test";
import assert from "node:assert/strict";
import { isIntPositive } from "./is-int-positive.js";

test("should return true for positive integers", () => {
  assert.strictEqual(isIntPositive(1), true);
  assert.strictEqual(isIntPositive(100), true);
});

test("should return false for zero and negative integers", () => {
  assert.strictEqual(isIntPositive(0), false);
  assert.strictEqual(isIntPositive(-1), false);
});

test("should return false for non-integer values", () => {
  assert.strictEqual(isIntPositive(1.5), false);
  assert.strictEqual(isIntPositive("1"), false);
  assert.strictEqual(isIntPositive(null), false);
});
