import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./from-number.js";

test("module loads: text/basic/from-number.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: text/basic/from-number.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
