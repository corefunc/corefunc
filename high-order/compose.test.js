import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./compose.js";

test("module loads: high-order/compose.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: high-order/compose.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
