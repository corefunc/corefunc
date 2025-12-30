import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./order.js";

test("module loads: object/keys/order.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/keys/order.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
