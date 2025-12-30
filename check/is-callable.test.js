import test from "node:test";
import assert from "node:assert/strict";
import { checkIsCallable } from "./is-callable.js";

test("should return true for functions", () => {
  assert.strictEqual(checkIsCallable(() => {}), true);
  assert.strictEqual(checkIsCallable(function () {}), true);
});

test("should return true for objects with toFunction method returning a function", () => {
  const callable = {
    toFunction: () => () => {},
  };
  assert.strictEqual(checkIsCallable(callable), true);
});

test("should return false for non-callable values", () => {
  assert.strictEqual(checkIsCallable({}), false);
  assert.strictEqual(checkIsCallable(null), false);
  assert.strictEqual(checkIsCallable(123), false);
});
