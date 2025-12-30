import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./type.js";

test("module loads: object/get/type.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/get/type.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
