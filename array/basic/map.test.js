import test from "node:test";
import assert from "node:assert/strict";
import { arrayBasicMap } from "./map.js";

test("should map values in array", () => {
  assert.deepEqual(
    arrayBasicMap([1, 2, 3], (value) => value * 2),
    [2, 4, 6],
  );
});

test("should provide index and original array to iteratee", () => {
  assert.deepEqual(
    arrayBasicMap([10, 20], (value, index) => value + index),
    [10, 21],
  );
});

test("should return empty array if input is empty", () => {
  assert.deepEqual(
    arrayBasicMap([], (value) => value),
    [],
  );
});
