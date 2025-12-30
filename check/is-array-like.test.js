import test from "node:test";
import assert from "node:assert/strict";
import { checkIsArrayLike } from "./is-array-like.js";

test("should return true for an array", () => {
  assert.strictEqual(checkIsArrayLike([1, 2, 3]), true);
});

test("should return true for an array-like object (iterable with length)", () => {
  const arrayLike = {
    0: "a",
    1: "b",
    length: 2,
    [Symbol.iterator]: function* () {
      yield "a";
      yield "b";
    },
  };
  assert.strictEqual(checkIsArrayLike(arrayLike), true);
});

test("should return false for objects without length or iterator", () => {
  assert.strictEqual(checkIsArrayLike({ a: 1 }), false);
  assert.strictEqual(checkIsArrayLike(null), false);
  assert.strictEqual(checkIsArrayLike(123), false);
});
