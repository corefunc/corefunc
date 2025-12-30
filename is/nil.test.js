import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./nil.js";

test("module loads: is/nil.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/nil.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isNil with null", () => {
  assert.strictEqual(mod.isNil(null), true);
});

test("isNil with undefined", () => {
  assert.strictEqual(mod.isNil(undefined), true);
});

test("isNil with 0", () => {
  assert.strictEqual(mod.isNil(0), false);
});

test("isNil with empty string", () => {
  assert.strictEqual(mod.isNil(""), false);
});
