import test from "node:test";
import assert from "node:assert/strict";
import { arrayKeyLast } from "./last.js";

test("should return last index of defined element", () => {
  assert.strictEqual(arrayKeyLast([1, 2, 3]), 2);
});

test("should return last index in sparse array", () => {
  // eslint-disable-next-line no-sparse-arrays
  assert.strictEqual(arrayKeyLast([1, ,]), 0);
});

test("should return null for empty array or only holes", () => {
  assert.strictEqual(arrayKeyLast([]), null);
  // eslint-disable-next-line no-sparse-arrays
  assert.strictEqual(arrayKeyLast([, ,]), null);
});
