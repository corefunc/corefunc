import test from "node:test";
import assert from "node:assert/strict";
import { checkIsSame } from "./is-same.js";

test("should return true for identical values", () => {
  assert.strictEqual(checkIsSame(1, 1), true);
  assert.strictEqual(checkIsSame("abc", "abc"), true);
});

test("should handle NaN", () => {
  assert.strictEqual(checkIsSame(NaN, NaN), true);
});

test("should handle negative zero", () => {
  assert.strictEqual(checkIsSame(0, -0), false);
  assert.strictEqual(checkIsSame(-0, -0), true);
});
