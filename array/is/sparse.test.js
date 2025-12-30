import test from "node:test";
import assert from "node:assert/strict";
import { arrayIsSparse } from "./sparse.js";

test("should return true for sparse array", () => {
  const arr = [1, 2];
  arr[4] = 5;
  assert.strictEqual(arrayIsSparse(arr), true);
});

test("should return false for dense array", () => {
  assert.strictEqual(arrayIsSparse([1, 2, 3]), false);
});

test("should return false for empty array", () => {
  assert.strictEqual(arrayIsSparse([]), false);
});
