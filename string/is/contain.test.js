import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./contain.js";

test("module loads: string/is/contain.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: string/is/contain.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
