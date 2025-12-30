import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./verbose.js";

test("module loads: regex/from/verbose.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: regex/from/verbose.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
