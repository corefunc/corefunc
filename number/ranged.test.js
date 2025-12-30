import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./ranged.js";

test("module loads: number/ranged.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: number/ranged.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
