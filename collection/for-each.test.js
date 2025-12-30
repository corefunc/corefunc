import test from "node:test";
import assert from "node:assert/strict";
import { collectionForEach } from "./for-each.js";

test("should iterate over an array", () => {
  const result = [];
  collectionForEach([1, 2, 3], (value) => result.push(value * 2));
  assert.deepEqual(result, [2, 4, 6]);
});

test("should iterate over an object", () => {
  const result = {};
  collectionForEach({ a: 1, b: 2 }, (value, key) => {
    result[key] = value + 10;
  });
  assert.deepEqual(result, { a: 11, b: 12 });
});

test("should iterate over a Map", () => {
  const map = new Map([["x", 10], ["y", 20]]);
  const result = [];
  collectionForEach(map, (value, key) => result.push([key, value]));
  assert.deepEqual(result, [["x", 10], ["y", 20]]);
});
