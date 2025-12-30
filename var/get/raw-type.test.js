import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./raw-type.js";

test("module loads: var/get/raw-type.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: var/get/raw-type.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
