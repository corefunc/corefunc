import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./call.js";

test("module loads: func/call.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: func/call.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
