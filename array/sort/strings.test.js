import test from "node:test";
import assert from "node:assert/strict";
import { arraySortStrings } from "./strings.js";

test("should sort strings in alphabetical order", () => {
  assert.deepEqual(arraySortStrings(["banana", "apple", "cherry"]), ["apple", "banana", "cherry"]);
});

test("should return a new array", () => {
  const input = ["b", "a"];
  const result = arraySortStrings(input);
  assert.notStrictEqual(result, input);
});

test("should handle empty array", () => {
  assert.deepEqual(arraySortStrings([]), []);
});
