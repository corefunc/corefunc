import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./match.js";

test("module loads: regex/match/match.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: regex/match/match.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
