import test from "node:test";
import assert from "node:assert/strict";
import { checkIsPrimitive } from "./is-primitive.js";

test("should return true for primitive values", () => {
  assert.strictEqual(checkIsPrimitive(true), true);
  assert.strictEqual(checkIsPrimitive(123), true);
  assert.strictEqual(checkIsPrimitive("abc"), true);
  assert.strictEqual(checkIsPrimitive(null), true);
  assert.strictEqual(checkIsPrimitive(undefined), true);
  assert.strictEqual(checkIsPrimitive(Symbol("test")), true);
  assert.strictEqual(checkIsPrimitive(100n), true);
});

test("should return false for objects and arrays", () => {
  assert.strictEqual(checkIsPrimitive({}), false);
  assert.strictEqual(checkIsPrimitive([]), false);
});

test("should return false for functions", () => {
  assert.strictEqual(checkIsPrimitive(() => {}), false);
});
