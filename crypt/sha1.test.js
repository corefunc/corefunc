import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./sha1.js";

test("module loads: crypt/sha1.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: crypt/sha1.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
