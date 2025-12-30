import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./strip-spaces.js";

test("module loads: regex/basic/strip-spaces.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: regex/basic/strip-spaces.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
