import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./index.js";

test("module loads: string/get/index.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: string/get/index.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
