import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./json-data.js";

test("module loads: convert/to/json-data.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: convert/to/json-data.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
