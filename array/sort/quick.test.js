import test from "node:test";
import assert from "node:assert/strict";
import { arraySortQuick } from "./quick.js";

test("should sort numbers in ascending order", () => {
  const input = [5, 3, 8, 1, 2];
  assert.deepEqual(arraySortQuick(input), [1, 2, 3, 5, 8]);
});

test("should handle already sorted array", () => {
  const input = [1, 2, 3];
  assert.deepEqual(arraySortQuick(input), [1, 2, 3]);
});

test("should handle empty array", () => {
  assert.deepEqual(arraySortQuick([]), []);
});

test("should sort with only items provided (default left/right)", () => {
  const input = [10, -1, 0, 5, 2];
  assert.deepEqual(arraySortQuick(input), [-1, 0, 2, 5, 10]);
});

test("should sort with items and left provided, right omitted", () => {
  const input = [5, 3, 8, 1, 2];
  // left = 2, right defaults to items.length - 1 (4)
  // Sub-array to sort: [8, 1, 2] -> [1, 2, 8]
  // Result: [5, 3, 1, 2, 8]
  assert.deepEqual(arraySortQuick(input, 2), [5, 3, 1, 2, 8]);
});

test("should sort a specific range with both left and right provided", () => {
  const input = [9, 7, 5, 3, 1];
  // left = 1, right = 3
  // Sub-array to sort: [7, 5, 3] -> [3, 5, 7]
  // Result: [9, 3, 5, 7, 1]
  assert.deepEqual(arraySortQuick(input, 1, 3), [9, 3, 5, 7, 1]);
});

test("should handle array with duplicate numbers", () => {
  const input = [3, 1, 2, 3, 1];
  assert.deepEqual(arraySortQuick(input), [1, 1, 2, 3, 3]);
});

test("should handle already sorted sub-range", () => {
  const input = [5, 1, 2, 3, 0];
  // left = 1, right = 3
  // Sub-array [1, 2, 3] is already sorted
  assert.deepEqual(arraySortQuick(input, 1, 3), [5, 1, 2, 3, 0]);
});

test("should handle single element range", () => {
  const input = [5, 3, 8, 1, 2];
  // left = 2, right = 2
  assert.deepEqual(arraySortQuick(input, 2, 2), [5, 3, 8, 1, 2]);
});

test("should sort strings in ascending order", () => {
  const input = ["banana", "apple", "cherry"];
  assert.deepEqual(arraySortQuick(input), ["apple", "banana", "cherry"]);
});

test("should sort objects using a custom comparator", () => {
  const input = [{ name: "John", age: 30 }, { name: "Jane", age: 25 }, { name: "Doe", age: 40 }];
  const compare = (alpha, beta) => alpha.age - beta.age;
  const result = arraySortQuick([...input], 0, input.length - 1, compare);
  assert.deepEqual(result, [
    { name: "Jane", age: 25 },
    { name: "John", age: 30 },
    { name: "Doe", age: 40 },
  ]);
});
