import test from "node:test";
import assert from "node:assert/strict";
import { arrayMakeClone } from "./clone.js";

test("should clone an array", () => {
  const input = [1, 2, 3];
  const result = arrayMakeClone(input);
  assert.deepEqual(result, input);
  assert.notStrictEqual(result, input);
});

test("should clone empty array", () => {
  const input = [];
  const result = arrayMakeClone(input);
  assert.deepEqual(result, []);
  assert.notStrictEqual(result, input);
});

test("should perform shallow clone", () => {
  const obj = { a: 1 };
  const input = [obj];
  const result = arrayMakeClone(input);
  assert.strictEqual(result[0], obj);
});
