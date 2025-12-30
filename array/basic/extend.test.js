import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicExtend } from "./extend.js";

test("should extend one array with another", () => {
  assert.deepEqual(arrayBasicExtend([1, 2], [3, 4]), [1, 2, 3, 4]);
});

test("should produce unique values if requested", () => {
  assert.deepEqual(arrayBasicExtend([1, 2], [2, 3], true), [1, 2, 3]);
});

test("should return empty array when no arguments provided", () => {
  assert.deepEqual(arrayBasicExtend(), []);
});
