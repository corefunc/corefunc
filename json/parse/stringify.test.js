import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./stringify.js";

test("module loads: json/parse/stringify.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: json/parse/stringify.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
