import test from "node:test";
import assert from "node:assert/strict";
import { checkIsObjectPlain } from "./is-object-plain.js";

test("should return true for plain objects", () => {
  assert.strictEqual(checkIsObjectPlain({}), true);
  assert.strictEqual(checkIsObjectPlain({ a: 1 }), true);
  assert.strictEqual(checkIsObjectPlain(new Object()), true);
});

test("should return false for arrays and other types", () => {
  assert.strictEqual(checkIsObjectPlain([]), false);
  assert.strictEqual(checkIsObjectPlain(new Date()), false);
  assert.strictEqual(checkIsObjectPlain(null), false);
});

test("should return false for primitive values", () => {
  assert.strictEqual(checkIsObjectPlain(123), false);
  assert.strictEqual(checkIsObjectPlain("abc"), false);
});
