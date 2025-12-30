import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicPull } from "./pull.js";

test("should remove all occurrences of a value", () => {
  assert.deepEqual(arrayBasicPull([1, 2, 3, 2, 4], 2), [1, 3, 4]);
});

test("should return same array (copy) if value not found", () => {
  const input = [1, 2, 3];
  const result = arrayBasicPull(input, 4);
  assert.deepEqual(result, input);
  assert.notStrictEqual(result, input);
});

test("should handle empty array", () => {
  assert.deepEqual(arrayBasicPull([], 1), []);
});
