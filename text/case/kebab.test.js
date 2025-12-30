import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./kebab.js";

test("module loads: text/case/kebab.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: text/case/kebab.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("kebab case conversion: JSONAPIExample", () => {
  const input = "JSONAPIExample";
  const expected = "jsonapi-example";
  const result = mod.textCaseKebab(input);
  assert.strictEqual(
    result,
    expected,
    `Expected kebab case conversion of '${input}' to be '${expected}', but got '${result}'`,
  );
});
