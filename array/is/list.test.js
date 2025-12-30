import test from "node:test";
import assert from "node:assert/strict";
import { arrayIsList } from "./list.js";

test("should return true for empty array", () => {
  assert.strictEqual(arrayIsList([]), true);
});

test("should return true for a regular array", () => {
  assert.strictEqual(arrayIsList(["🍌", "🍏", "🍇", "🍊"]), true);
});

test("should return false for typed arrays", () => {
  assert.strictEqual(arrayIsList(new Int16Array()), false);
});

test("should return false for an array with extra properties", () => {
  const list = ["🍌", "🍏", "🍇", "🍊"];
  // @ts-expect-error Adding extra properties is fine.
  list[-1] = "🍓";
  assert.strictEqual(arrayIsList(list), false);
});

test("should return false for sparse arrays", () => {
  const list = ["a", "b"];
  list[4] = "e";
  assert.strictEqual(arrayIsList(list), false);
});
