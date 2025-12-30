import test from "node:test";
import assert from "node:assert/strict";
import convertBase64ToString from "./string.js";

test("convertBase64ToString: basic example", () => {
  assert.strictEqual(convertBase64ToString("SGVsbG8gV29ybGQh"), "Hello World!");
});

test("convertBase64ToString: empty string", () => {
  assert.strictEqual(convertBase64ToString(""), "");
});

test("convertBase64ToString: numeric string", () => {
  assert.strictEqual(convertBase64ToString("MTIzNDU="), "12345");
});

test("convertBase64ToString: special characters", () => {
  assert.strictEqual(convertBase64ToString("QCMkJSBeJiooKQ=="), "@#$% ^&*()");
});
