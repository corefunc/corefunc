import test from "node:test";
import assert from "node:assert/strict";
import { checkIsFalsy } from "./is-falsy.js";

test("should return true for literal falsy values", () => {
  assert.strictEqual(checkIsFalsy(false), true);
  assert.strictEqual(checkIsFalsy(0), true);
});

test("should return true for string equivalents of falsy values", () => {
  assert.strictEqual(checkIsFalsy("false"), true);
  assert.strictEqual(checkIsFalsy("no"), true);
  assert.strictEqual(checkIsFalsy("0"), true);
  assert.strictEqual(checkIsFalsy("off"), true);
});

test("should return false for truthy values", () => {
  assert.strictEqual(checkIsFalsy(true), false);
  assert.strictEqual(checkIsFalsy("yes"), false);
  assert.strictEqual(checkIsFalsy(1), false);
});
