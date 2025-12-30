import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./days-in-month.js";

test("module loads: date/days-in-month.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: date/days-in-month.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
