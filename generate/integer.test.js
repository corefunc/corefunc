import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./integer.js";

test("module loads: generate/integer.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: generate/integer.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
