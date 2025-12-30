import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./replace.js";

test("module loads: regex/basic/replace.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: regex/basic/replace.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
