import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicShuffle } from "./shuffle.js";

test("should shuffle array elements", () => {
  const input = [1, 2, 3, 4, 5];
  const result = arrayBasicShuffle([...input]);
  assert.strictEqual(result.length, input.length);
  assert.ok(input.every(value => result.includes(value)));
});

test("should modify array in place", () => {
  const input = [1, 2, 3];
  const result = arrayBasicShuffle(input);
  assert.strictEqual(result, input);
});

test("should handle empty array", () => {
  assert.deepEqual(arrayBasicShuffle([]), []);
});
