import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./index.js";

test("module loads: text/emoji/index.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: text/emoji/index.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
