import test from "node:test";
import assert from "node:assert/strict";
import { castToFloat } from "./float.js";

test("should cast string to float", () => {
  assert.strictEqual(castToFloat("16.5"), 16.5);
});

test("should return onFail value for invalid input", () => {
  assert.strictEqual(castToFloat("abc", 0), 0);
});

test("should support toFixed", () => {
  assert.strictEqual(castToFloat("16.555", 0, 2), 16.56);
});
