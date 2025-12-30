import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./one-of-or-else.js";

test("module loads: var/get/one-of-or-else.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: var/get/one-of-or-else.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
