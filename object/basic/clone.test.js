import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./clone.js";

test("module loads: object/basic/clone.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/basic/clone.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
