import test from "node:test";
import assert from "node:assert/strict";
import { checkIsTrueish } from "./is-trueish.js";

test("should return true for literal trueish values", () => {
  assert.strictEqual(checkIsTrueish(true), true);
  assert.strictEqual(checkIsTrueish(1), true);
});

test("should return true for string equivalents of trueish values", () => {
  assert.strictEqual(checkIsTrueish("true"), true);
  assert.strictEqual(checkIsTrueish("yes"), true);
  assert.strictEqual(checkIsTrueish("1"), true);
  assert.strictEqual(checkIsTrueish("on"), true);
});

test("should return false for falsy values", () => {
  assert.strictEqual(checkIsTrueish(false), false);
  assert.strictEqual(checkIsTrueish("no"), false);
  assert.strictEqual(checkIsTrueish(0), false);
});
