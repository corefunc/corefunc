import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicInsert } from "./insert.js";

test("should insert item at specified index", () => {
  assert.deepEqual(arrayBasicInsert([1, 2, 4], 2, 3), [1, 2, 3, 4]);
});

test("should insert item at the beginning", () => {
  assert.deepEqual(arrayBasicInsert([2, 3], 0, 1), [1, 2, 3]);
});

test("should insert item at the end", () => {
  assert.deepEqual(arrayBasicInsert([1, 2], 2, 3), [1, 2, 3]);
});
