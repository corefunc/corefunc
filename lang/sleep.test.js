import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./sleep.js";

test("module loads: lang/sleep.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: lang/sleep.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
