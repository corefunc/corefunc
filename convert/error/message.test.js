import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./message.js";

test("module loads: convert/error/message.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: convert/error/message.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
