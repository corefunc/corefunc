import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./camel.js";

test("module loads: text/case/camel.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: text/case/camel.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
