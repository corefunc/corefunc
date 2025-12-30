import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./base64.js";

test("module loads: convert/string/base64.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: convert/string/base64.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
