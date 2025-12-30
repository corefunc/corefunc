import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./object.js";

test("module loads: convert/error/object.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: convert/error/object.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
