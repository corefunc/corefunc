import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicWith } from "./with.js";

test("should return new array with updated value at index", () => {
  const input = [1, 2, 3];
  const result = arrayBasicWith(input, 1, 20);
  assert.deepEqual(result, [1, 20, 3]);
  assert.notStrictEqual(result, input);
});

test("should handle negative index", () => {
  assert.deepEqual(arrayBasicWith([1, 2, 3], -1, 30), [1, 2, 30]);
});

test("should suppress errors by default for out of range index", () => {
  const input = [1, 2, 3];
  assert.deepEqual(arrayBasicWith(input, 5, 50), input);
});
