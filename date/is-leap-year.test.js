import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./is-leap-year.js";

test("module loads: date/is-leap-year.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: date/is-leap-year.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
