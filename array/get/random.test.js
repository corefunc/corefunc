import test from "node:test";
import assert from "node:assert/strict";
import { arrayGetRandom } from "./random.js";

test("should return an element from the array", () => {
  const input = [1, 2, 3];
  const result = arrayGetRandom(input);
  assert.ok(input.includes(result));
});

test("should return undefined for empty array", () => {
  assert.strictEqual(arrayGetRandom([]), undefined);
});

test("should return the only element for single-item array", () => {
  assert.strictEqual(arrayGetRandom([42]), 42);
});
