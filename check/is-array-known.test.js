import test from "node:test";
import assert from "node:assert/strict";
import { checkIsArrayKnown } from "./is-array-known.js";

test("should return true for an array", () => {
  assert.strictEqual(checkIsArrayKnown([1, 2, 3]), true);
});

test("should return true for an empty array", () => {
  assert.strictEqual(checkIsArrayKnown([]), true);
});

test("should return false for non-array values", () => {
  assert.strictEqual(checkIsArrayKnown({}), false);
  assert.strictEqual(checkIsArrayKnown(null), false);
  assert.strictEqual(checkIsArrayKnown("abc"), false);
});
