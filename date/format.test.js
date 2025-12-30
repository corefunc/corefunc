import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./format.js";

test("module loads: date/format.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: date/format.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
