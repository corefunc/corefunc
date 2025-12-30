import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./number.js";

test("module loads: is/number.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/number.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isNumber with number", () => {
  assert.strictEqual(mod.isNumber(123), true);
});

test("isNumber with NaN", () => {
  assert.strictEqual(mod.isNumber(NaN), false);
});

test("isNumber with Infinity", () => {
  assert.strictEqual(mod.isNumber(Infinity), false);
});

test("isNumber with string number", () => {
  assert.strictEqual(mod.isNumber("123"), false);
});

test("isNumber with Number object", () => {
  assert.strictEqual(mod.isNumber(new Number(123)), true);
});
