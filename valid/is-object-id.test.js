import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./is-object-id.js";

test("module loads: valid/is-object-id.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: valid/is-object-id.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
