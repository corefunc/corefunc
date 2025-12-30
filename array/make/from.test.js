import test from "node:test";
import assert from "node:assert/strict";
import { arrayMakeFrom } from "./from.js";

test("should create array from Set", () => {
  assert.deepEqual(arrayMakeFrom(new Set([1, 2])), [1, 2]);
});

test("should create array from Map values", () => {
  const map = new Map([[1, "a"], [2, "b"]]);
  assert.deepEqual(arrayMakeFrom(map), ["a", "b"]);
});

test("should create array from Object values", () => {
  assert.deepEqual(arrayMakeFrom({ a: 1, b: 2 }), [1, 2]);
});
