import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./regexp.js";

test("module loads: is/regexp.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/regexp.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isRegExp with regex literal", () => {
  assert.strictEqual(mod.isRegExp(/abc/), true);
});

test("isRegExp with RegExp object", () => {
  assert.strictEqual(mod.isRegExp(new RegExp("abc")), true);
});

test("isRegExp with string", () => {
  assert.strictEqual(mod.isRegExp("abc"), false);
});
