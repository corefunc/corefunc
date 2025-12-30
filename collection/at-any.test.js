import test from "node:test";
import assert from "node:assert/strict";
import { collectionAtAny } from "./at-any.js";

test("should pick the first available property name", () => {
  const obj = { a: 1, b: 2 };
  assert.strictEqual(collectionAtAny(obj, ["b", "a"], 0), 2);
});

test("should handle case-insensitivity for property names", () => {
  const obj = { a: 1, b: 2 };
  assert.strictEqual(collectionAtAny(obj, ["B"], 0), 2);
});

test("should return onFail value if no property names match", () => {
  const obj = { a: 1 };
  assert.strictEqual(collectionAtAny(obj, ["c", "d"], 42), 42);
});
