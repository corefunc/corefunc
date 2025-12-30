import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./keys.js";

test("module loads: object/get/keys.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/get/keys.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
