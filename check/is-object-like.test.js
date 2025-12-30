import test from "node:test";
import assert from "node:assert/strict";
import { checkIsObjectLike } from "./is-object-like.js";

test("should return true for objects", () => {
  assert.strictEqual(checkIsObjectLike({}), true);
  assert.strictEqual(checkIsObjectLike({ a: 1 }), true);
});

test("should return false for arrays", () => {
  assert.strictEqual(checkIsObjectLike([1, 2, 3]), false);
});

test("should return false for null and primitive values", () => {
  assert.strictEqual(checkIsObjectLike(null), false);
  assert.strictEqual(checkIsObjectLike(123), false);
  assert.strictEqual(checkIsObjectLike("abc"), false);
});
