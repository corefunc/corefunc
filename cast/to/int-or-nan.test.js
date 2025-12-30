import test from "node:test";
import assert from "node:assert/strict";
import { castToIntOrNan } from "./int-or-nan.js";

test("should cast string to integer", () => {
  assert.strictEqual(castToIntOrNan("16.5"), 16);
});

test("should return NaN for null or undefined", () => {
  assert.ok(Number.isNaN(castToIntOrNan(null)));
  assert.ok(Number.isNaN(castToIntOrNan(undefined)));
});

test("should return NaN for non-numeric string", () => {
  assert.ok(Number.isNaN(castToIntOrNan("abc")));
});
