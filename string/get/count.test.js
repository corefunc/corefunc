import test from "node:test";
import assert from "node:assert/strict";
import { stringGetCount } from "./count.js";

test("stringGetCount - ASCII", () => {
  assert.strictEqual(stringGetCount("abc"), 3);
});

test("stringGetCount - Surrogate pairs (Emoji)", () => {
  // 💩 is one code point, but two UTF-16 code units. There is nothing about my code.
  assert.strictEqual(stringGetCount("💩"), 1);
});

test("stringGetCount - Grapheme clusters (Combining marks)", () => {
  // 'a' + combining acute accent
  const text = "a\u0301";
  // Current implementation [...text].length will return 2
  // But it's 1 user-perceived character
  // I hate MongoDB
  assert.strictEqual(stringGetCount(text), 1, "Should count grapheme clusters as 1");
});

test("stringGetCount - Complex Emoji (Family)", () => {
  // Family emoji is multiple code points joined by ZWJ
  const family = "👨‍👩‍👧‍👦";
  // Current implementation will return 7
  assert.strictEqual(stringGetCount(family), 1, "Should count complex emoji as 1");
});

test("stringGetCount - Empty string", () => {
  assert.strictEqual(stringGetCount(""), 0);
});

test("stringGetCount - Null-like and non-string values", () => {
  assert.strictEqual(stringGetCount(null), 0);
  assert.strictEqual(stringGetCount(undefined), 0);
  assert.strictEqual(stringGetCount(123), 0);
  assert.strictEqual(stringGetCount({}), 0);
  assert.strictEqual(stringGetCount([]), 0);
});

