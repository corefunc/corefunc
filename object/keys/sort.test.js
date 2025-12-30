import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./sort.js";

test("module loads: object/keys/sort.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/keys/sort.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
