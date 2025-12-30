import test from "node:test";
import assert from "node:assert/strict";
import { castToRegExp } from "./regexp.js";

test("should cast string to RegExp", () => {
  const result = castToRegExp("abc");
  assert.ok(result instanceof RegExp);
  assert.strictEqual(result.source, "abc");
});

test("should support array with pattern and flags", () => {
  const result = castToRegExp(["abc", "i"]);
  assert.ok(result instanceof RegExp);
  assert.strictEqual(result.source, "abc");
  assert.strictEqual(result.flags, "i");
});

test("should return original RegExp if passed", () => {
  const original = /test/g;
  const result = castToRegExp(original);
  assert.strictEqual(result, original);
});
