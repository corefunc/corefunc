import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./cleanup.js";

test("module loads: json/basic/cleanup.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: json/basic/cleanup.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
