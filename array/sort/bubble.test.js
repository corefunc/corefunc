import test from "node:test";
import assert from "node:assert/strict";
import { arraySortBubble } from "./bubble.js";

test("should sort numbers in ascending order", () => {
  assert.deepEqual(arraySortBubble([5, 3, 8, 1, 2]), [1, 2, 3, 5, 8]);
});

test("should handle already sorted array", () => {
  assert.deepEqual(arraySortBubble([1, 2, 3]), [1, 2, 3]);
});

test("should handle empty array", () => {
  assert.deepEqual(arraySortBubble([]), []);
});

test("should sort strings in ascending order", () => {
  const input = ["banana", "apple", "cherry"];
  assert.deepEqual(arraySortBubble(input), ["apple", "banana", "cherry"]);
});

test("should sort objects using a custom comparator", () => {
  const input = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Doe", age: 40 }];
  const compare = (alpha, beta) => alpha.age - beta.age;
  const result = arraySortBubble([...input], compare);
  assert.deepEqual(result, [
    { name: "Jane", age: 25 },
    { name: "John", age: 30 },
    { name: "Doe", age: 40 },
  ]);
});
