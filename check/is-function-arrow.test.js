import test from "node:test";
import assert from "node:assert/strict";
import { checkIsFunctionArrow } from "./is-function-arrow.js";

test("should return true for arrow functions", () => {
  assert.strictEqual(checkIsFunctionArrow(() => {}), true);
  assert.strictEqual(checkIsFunctionArrow((x) => x * 2), true);
});

test("should return false for regular functions", () => {
  assert.strictEqual(checkIsFunctionArrow(function () {}), false);
  assert.strictEqual(checkIsFunctionArrow(function named() {}), false);
});

test("should return false for non-function values", () => {
  assert.strictEqual(checkIsFunctionArrow({}), false);
  assert.strictEqual(checkIsFunctionArrow(null), false);
  assert.strictEqual(checkIsFunctionArrow("() => {}"), false);
});
