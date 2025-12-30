import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./head.js";

test("module loads: collection/head.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: collection/head.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
