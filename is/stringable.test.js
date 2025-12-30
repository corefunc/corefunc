import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./stringable.js";

test("module loads: is/stringable.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/stringable.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
