import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./pin-code.js";

test("module loads: generate/pin-code.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: generate/pin-code.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
