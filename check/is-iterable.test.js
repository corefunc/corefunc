import test from "node:test";
import assert from "node:assert/strict";
import { checkIsIterable } from "./is-iterable.js";

test("should return true for arrays and sets", () => {
  assert.strictEqual(checkIsIterable([1, 2]), true);
  assert.strictEqual(checkIsIterable(new Set()), true);
});

test("should return true for strings", () => {
  assert.strictEqual(checkIsIterable("abc"), true);
});

test("should return false for non-iterable values", () => {
  assert.strictEqual(checkIsIterable({}), false);
  assert.strictEqual(checkIsIterable(null), false);
  assert.strictEqual(checkIsIterable(123), false);
});
