import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./error.js";

test("module loads: is/error.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/error.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isError with Error object", () => {
  assert.strictEqual(mod.isError(new Error("error")), true);
});

test("isError with TypeError object", () => {
  assert.strictEqual(mod.isError(new TypeError("type error")), true);
});

test("isError with non-error object", () => {
  assert.strictEqual(mod.isError({}), false);
});

test("isError with null", () => {
  assert.strictEqual(mod.isError(null), false);
});
