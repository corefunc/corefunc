import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicSize } from "./size.js";

test("should return the number of elements in array", () => {
  assert.strictEqual(arrayBasicSize([1, 2, 3]), 3);
});

test("should return 0 for empty array", () => {
  assert.strictEqual(arrayBasicSize([]), 0);
});

test("should count elements in sparse array", () => {
  // Create a sparse array programmatically to avoid sparse-literal lint rule
  const sparse = Array(3);
  sparse[0] = 1;
  sparse[2] = 3;
  assert.strictEqual(arrayBasicSize(sparse), 3);
});
