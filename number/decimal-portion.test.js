import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./decimal-portion.js";

test("module loads: number/decimal-portion.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: number/decimal-portion.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
