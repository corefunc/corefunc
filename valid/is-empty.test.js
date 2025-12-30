import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./is-empty.js";

test("module loads: valid/is-empty.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: valid/is-empty.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
