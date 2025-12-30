import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./parse.js";

test("module loads: json/stringify/parse.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: json/stringify/parse.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
