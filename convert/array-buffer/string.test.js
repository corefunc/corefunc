import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./string.js";

test("module loads: convert/array-buffer/string.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: convert/array-buffer/string.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
