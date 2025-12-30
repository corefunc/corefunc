import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./keys-values.js";

test("module loads: object/from/keys-values.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/from/keys-values.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
