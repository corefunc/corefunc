import test from "node:test";
import assert from "node:assert/strict";
import { castToFloatOrNull } from "./float-or-null.js";

test("should cast string to float", () => {
  assert.strictEqual(castToFloatOrNull("16.5"), 16.5);
});

test("should return null for null or undefined", () => {
  assert.strictEqual(castToFloatOrNull(null), null);
  assert.strictEqual(castToFloatOrNull(undefined), null);
});

test("should support toFixed", () => {
  assert.strictEqual(castToFloatOrNull("16.555", 2), 16.56);
});
