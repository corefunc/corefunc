import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./defaults.js";

test("module loads: object/set/defaults.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/set/defaults.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
