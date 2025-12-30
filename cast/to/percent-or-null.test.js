import test from "node:test";
import assert from "node:assert/strict";
import { castToPercentOrNull } from "./percent-or-null.js";

test("should cast string to percent (float with 2 decimal places)", () => {
  assert.strictEqual(castToPercentOrNull("16.501"), 16.5);
});

test("should return null for null or undefined", () => {
  assert.strictEqual(castToPercentOrNull(null), null);
  assert.strictEqual(castToPercentOrNull(undefined), null);
});

test("should handle non-numeric string by returning null", () => {
  assert.strictEqual(castToPercentOrNull("abc"), null);
});
