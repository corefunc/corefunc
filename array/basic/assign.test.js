import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicAssign } from "./assign.js";

test("should assign values from one array to another", () => {
  assert.deepEqual(arrayBasicAssign([1, 2], [3]), [3, 2]);
});

test("should extend array if source is longer", () => {
  assert.deepEqual(arrayBasicAssign([1, 2], [3, 4, 5]), [3, 4, 5]);
});

test("should return new array, not mutate original", () => {
  const original = [1, 2];
  const assigned = arrayBasicAssign(original, [3]);
  assert.notStrictEqual(original, assigned);
  assert.deepEqual(original, [1, 2]);
});
