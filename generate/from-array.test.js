import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./from-array.js";

test("module loads: generate/from-array.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: generate/from-array.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
