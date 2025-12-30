import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./wait-forever.js";

test("module loads: promise/wait-forever.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: promise/wait-forever.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
