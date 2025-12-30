import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./abbreviate.js";

test("module loads: text/case/abbreviate.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: text/case/abbreviate.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("textCaseAbbreviate: basic abbreviation", () => {
  assert.strictEqual(mod.textCaseAbbreviate("Hello World"), "HW");
});

test("textCaseAbbreviate: camelCase", () => {
  assert.strictEqual(mod.textCaseAbbreviate("helloWorld"), "hW");
});

test("textCaseAbbreviate: PascalCase", () => {
  assert.strictEqual(mod.textCaseAbbreviate("HelloWorld"), "HW");
});

test("textCaseAbbreviate: with custom letter count", () => {
  assert.strictEqual(mod.textCaseAbbreviate("Hello World", 2), "HeWo");
});

test("textCaseAbbreviate: single word", () => {
  assert.strictEqual(mod.textCaseAbbreviate("Hello"), "H");
});
