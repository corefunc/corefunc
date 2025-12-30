import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./error.js";

test("module loads: convert/to/error.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: convert/to/error.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
