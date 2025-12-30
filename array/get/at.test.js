import test from "node:test";
import assert from "node:assert/strict";
import { arrayGetAt } from "./at.js";

test("should return element at positive index", () => {
  assert.strictEqual(arrayGetAt([1, 2, 3], 1), 2);
});

test("should return element at negative index", () => {
  assert.strictEqual(arrayGetAt([1, 2, 3], -1), 3);
});

test("should return onFail value for out of range index", () => {
  assert.strictEqual(arrayGetAt([1, 2, 3], 5, "missing"), "missing");
});
