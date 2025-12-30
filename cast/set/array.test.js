import test from "node:test";
import assert from "node:assert/strict";
import { castSetToArray } from "./array.js";

test("should convert Set values to array", () => {
  const set = new Set([1, 2, 3]);
  assert.deepEqual(castSetToArray(set), [1, 2, 3]);
});

test("should handle empty Set", () => {
  assert.deepEqual(castSetToArray(new Set()), []);
});

test("should handle Set with various value types", () => {
  const set = new Set([{ x: 10 }, [20]]);
  assert.deepEqual(castSetToArray(set), [{ x: 10 }, [20]]);
});
