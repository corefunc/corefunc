import test from "node:test";
import assert from "node:assert/strict";
import { isFunction } from "./function.js";

test("should return true for regular functions", () => {
  assert.strictEqual(isFunction(function () {}), true);
  assert.strictEqual(isFunction(() => {}), true);
});

test("should return false for classes", () => {
  assert.strictEqual(isFunction(class MyClass {}), false);
});

test("should return false for non-function values", () => {
  assert.strictEqual(isFunction({}), false);
  assert.strictEqual(isFunction(null), false);
  assert.strictEqual(isFunction(123), false);
});
