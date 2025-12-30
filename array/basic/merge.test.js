import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicMerge } from "./merge.js";

test("should merge second array into first", () => {
  const target = [1, 2];
  const result = arrayBasicMerge(target, [3, 4]);
  assert.deepEqual(result, [1, 2, 3, 4]);
  assert.strictEqual(result, target);
});

test("should handle empty arrays", () => {
  assert.deepEqual(arrayBasicMerge([1], []), [1]);
});

test("should merge into empty array", () => {
  assert.deepEqual(arrayBasicMerge([], [1, 2]), [1, 2]);
});
