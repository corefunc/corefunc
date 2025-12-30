import test from "node:test";
import assert from "node:assert/strict";
import { checkIsTimeStamp } from "./is-time-stamp.js";

test("should return true for valid timestamps", () => {
  assert.strictEqual(checkIsTimeStamp("2020-01-01"), true);
  assert.strictEqual(checkIsTimeStamp(1577836800000), true);
});

test("should return false for timestamps outside of range", () => {
  assert.strictEqual(checkIsTimeStamp("1960-01-01"), false);
  assert.strictEqual(checkIsTimeStamp("2040-01-01"), false);
});

test("should return false for invalid date strings", () => {
  assert.strictEqual(checkIsTimeStamp("invalid"), false);
});
