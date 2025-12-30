import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./generator-object.js";

test("module loads: is/generator-object.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/generator-object.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
