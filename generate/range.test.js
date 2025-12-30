import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./range.js";

test("module loads: generate/range.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: generate/range.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
