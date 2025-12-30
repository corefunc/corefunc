import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./date-iso.js";

test("module loads: regex/is/date-iso.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: regex/is/date-iso.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
