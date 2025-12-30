import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./name.js";

test("module loads: prototype/name.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: prototype/name.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
