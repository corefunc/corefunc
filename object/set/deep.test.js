import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./deep.js";

test("module loads: object/set/deep.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/set/deep.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
