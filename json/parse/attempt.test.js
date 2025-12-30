import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./attempt.js";

test("module loads: json/parse/attempt.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: json/parse/attempt.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("jsonParseAttempt: valid JSON string", () => {
  assert.deepStrictEqual(mod.jsonParseAttempt('{"a":1}'), { a: 1 });
});

test("jsonParseAttempt: valid JSON number", () => {
  assert.strictEqual(mod.jsonParseAttempt("123"), 123);
});

test("jsonParseAttempt: invalid JSON returns original string", () => {
  assert.strictEqual(mod.jsonParseAttempt("invalid json"), "invalid json");
});

test("jsonParseAttempt: non-string value returns original value", () => {
  const obj = { x: 1 };
  assert.strictEqual(mod.jsonParseAttempt(obj), obj);
});
