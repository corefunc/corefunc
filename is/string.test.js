import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./string.js";

test("module loads: is/string.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/string.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isString with string", () => {
  assert.strictEqual(mod.isString("hello"), true);
});

test("isString with empty string", () => {
  assert.strictEqual(mod.isString(""), true);
});

test("isString with String object", () => {
  assert.strictEqual(mod.isString(new String("hello")), true);
});

test("isString with number", () => {
  assert.strictEqual(mod.isString(123), false);
});
