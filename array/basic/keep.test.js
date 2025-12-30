import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicKeep } from "./keep.js";

test("should keep elements that satisfy the predicate", () => {
  assert.deepEqual(arrayBasicKeep([1, 2, 3, 4], (value) => value % 2 === 0), [2, 4]);
});

test("should return empty array if no elements satisfy the predicate", () => {
  assert.deepEqual(arrayBasicKeep([1, 3, 5], (value) => value % 2 === 0), []);
});

test("should pass index and array to predicate", () => {
  const indices = [];
  arrayBasicKeep([10, 20], (value, index) => {
    indices.push(index);
    return true;
  });
  assert.deepEqual(indices, [0, 1]);
});
