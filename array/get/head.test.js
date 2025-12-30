import test from "node:test";
import assert from "node:assert/strict";
import { arrayGetHead } from "./head.js";

test("should return first non-empty element", () => {
  // eslint-disable-next-line no-sparse-arrays
  assert.strictEqual(arrayGetHead([, , "🍌", "🍏"]), "🍌");
});

test("should return default value if array is empty", () => {
  assert.strictEqual(arrayGetHead([], "empty"), "empty");
});

test("should return first element of regular array", () => {
  assert.strictEqual(arrayGetHead([1, 2, 3]), 1);
});
