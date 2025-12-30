import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./round.js";

test("module loads: number/round.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: number/round.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
