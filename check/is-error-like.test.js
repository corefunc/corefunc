import test from "node:test";
import assert from "node:assert/strict";
import { checkIsErrorLike } from "./is-error-like.js";

test("should return true for Error instances", () => {
  assert.strictEqual(checkIsErrorLike(new Error("test")), true);
  assert.strictEqual(checkIsErrorLike(new TypeError("test")), true);
});

test("should return true for error-like objects", () => {
  assert.strictEqual(checkIsErrorLike({ message: "test", name: "Error" }), true);
});

test("should return false for non-error-like values", () => {
  assert.strictEqual(checkIsErrorLike({ message: "test" }), false);
  assert.strictEqual(checkIsErrorLike(null), false);
  assert.strictEqual(checkIsErrorLike("Error"), false);
});
