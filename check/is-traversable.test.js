import test from "node:test";
import assert from "node:assert/strict";
import { checkIsTraversable } from "./is-traversable.js";

test("should return true for arrays and objects", () => {
  assert.strictEqual(checkIsTraversable([1, 2]), true);
  assert.strictEqual(checkIsTraversable({ a: 1 }), true);
});

test("should return true for iterables", () => {
  assert.strictEqual(checkIsTraversable(new Set()), true);
  assert.strictEqual(checkIsTraversable("abc"), true);
});

test("should return false for null and numbers", () => {
  assert.strictEqual(checkIsTraversable(null), false);
  assert.strictEqual(checkIsTraversable(123), false);
});
