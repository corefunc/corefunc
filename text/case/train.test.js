import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./train.js";

test("module loads: text/case/train.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: text/case/train.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
