import test from "node:test";
import assert from "node:assert/strict";
import { arrayIsEmpty } from "./empty.js";

test("should return true for empty array", () => {
  assert.strictEqual(arrayIsEmpty([]), true);
});

test("should return false for non-empty array", () => {
  assert.strictEqual(arrayIsEmpty([1]), false);
});

test("should return false for array with undefined element", () => {
  assert.strictEqual(arrayIsEmpty([undefined]), false);
});
