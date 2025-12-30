import test from "node:test";
import assert from "node:assert/strict";
import { castToIntOrNull } from "./int-or-null.js";

test("should cast string to integer", () => {
  assert.strictEqual(castToIntOrNull("16.5"), 16);
});

test("should return null for null or undefined", () => {
  assert.strictEqual(castToIntOrNull(null), null);
  assert.strictEqual(castToIntOrNull(undefined), null);
});

test("should return null for non-numeric string", () => {
  assert.strictEqual(castToIntOrNull("abc"), null);
});
