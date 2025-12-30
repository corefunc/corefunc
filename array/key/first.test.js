import test from "node:test";
import assert from "node:assert/strict";
import { arrayKeyFirst } from "./first.js";

test("should return first index of defined element", () => {
  assert.strictEqual(arrayKeyFirst([1, 2, 3]), 0);
});

test("should return first index in sparse array", () => {
  // eslint-disable-next-line no-sparse-arrays
  assert.strictEqual(arrayKeyFirst([, , 3]), 2);
});

test("should return null for empty array or only holes", () => {
  assert.strictEqual(arrayKeyFirst([]), null);
  // eslint-disable-next-line no-sparse-arrays
  assert.strictEqual(arrayKeyFirst([, ,]), null);
});
