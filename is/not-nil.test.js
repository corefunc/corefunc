import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./not-nil.js";

test("module loads: is/not-nil.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/not-nil.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isNotNil with null", () => {
  assert.strictEqual(mod.isNotNil(null), false);
});

test("isNotNil with undefined", () => {
  assert.strictEqual(mod.isNotNil(undefined), false);
});

test("isNotNil with 0", () => {
  assert.strictEqual(mod.isNotNil(0), true);
});

test("isNotNil with empty string", () => {
  assert.strictEqual(mod.isNotNil(""), true);
});
