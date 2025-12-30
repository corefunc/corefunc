import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./plain.js";

test("module loads: text/basic/plain.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: text/basic/plain.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
