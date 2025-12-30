import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicIntersect } from "./intersect.js";

test("should return intersection of two arrays", () => {
  assert.deepEqual(arrayBasicIntersect([1, 2, 3], [2, 3, 4]), [2, 3]);
});

test("should return empty array if no intersection", () => {
  assert.deepEqual(arrayBasicIntersect([1, 2], [3, 4]), []);
});

test("should return empty array if one array is empty", () => {
  assert.strictEqual(arrayBasicIntersect([], [1, 2]).length, 0);
  assert.strictEqual(arrayBasicIntersect([1, 2], []).length, 0);
});
