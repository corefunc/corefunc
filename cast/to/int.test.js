import test from "node:test";
import assert from "node:assert/strict";
import { castToInt } from "./int.js";

test("should cast string to integer", () => {
  assert.strictEqual(castToInt("16.5"), 16);
});

test("should return returnOnFail value for invalid input", () => {
  assert.strictEqual(castToInt("abc", 42), 42);
});

test("should handle booleans", () => {
  assert.strictEqual(castToInt(true), 1);
  assert.strictEqual(castToInt(false), 0);
});
