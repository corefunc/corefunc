import test from "node:test";
import assert from "node:assert/strict";
import { checkIsKeyed } from "./is-keyed.js";

test("should return true for Set and Map", () => {
  assert.strictEqual(checkIsKeyed(new Set()), true);
  assert.strictEqual(checkIsKeyed(new Map()), true);
});

test("should return false for regular objects and arrays", () => {
  assert.strictEqual(checkIsKeyed({}), false);
  assert.strictEqual(checkIsKeyed([]), false);
});

test("should return false for primitive values", () => {
  assert.strictEqual(checkIsKeyed(null), false);
  assert.strictEqual(checkIsKeyed(123), false);
});
