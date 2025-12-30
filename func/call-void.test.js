import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./call-void.js";

test("module loads: func/call-void.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: func/call-void.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
