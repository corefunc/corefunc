import test from "node:test";
import assert from "node:assert/strict";
import { castMapToArray } from "./array.js";

test("should convert Map values to array", () => {
  const map = new Map([["a", 1], ["b", 2]]);
  assert.deepEqual(castMapToArray(map), [1, 2]);
});

test("should handle empty Map", () => {
  assert.deepEqual(castMapToArray(new Map()), []);
});

test("should handle Map with various value types", () => {
  const map = new Map([[1, { x: 10 }], [2, [20]]]);
  assert.deepEqual(castMapToArray(map), [{ x: 10 }, [20]]);
});
