import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./text-to-short.js";

test("module loads: hash/text-to-short.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: hash/text-to-short.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
