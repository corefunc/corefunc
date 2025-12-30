import test from "node:test";
import assert from "node:assert/strict";
import { castToString } from "./string.js";

test("should cast number to string", () => {
  assert.strictEqual(castToString(123), "123");
});

test("should return empty string for null or undefined", () => {
  assert.strictEqual(castToString(null), "");
  assert.strictEqual(castToString(undefined), "");
});

test("should handle negative zero", () => {
  assert.strictEqual(castToString(-0), "-0");
});
