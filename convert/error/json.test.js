import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./json.js";

test("module loads: convert/error/json.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: convert/error/json.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
