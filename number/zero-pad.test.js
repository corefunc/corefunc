import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./zero-pad.js";

test("module loads: number/zero-pad.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: number/zero-pad.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
