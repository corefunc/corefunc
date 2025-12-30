import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./sub.js";

test("module loads: string/find/sub.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: string/find/sub.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
