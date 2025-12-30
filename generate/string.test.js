import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./string.js";

test("module loads: generate/string.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: generate/string.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
