import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./own-property.js";

test("module loads: object/is/own-property.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/is/own-property.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
