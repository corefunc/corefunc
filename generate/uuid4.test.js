import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./uuid4.js";

test("module loads: generate/uuid4.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: generate/uuid4.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
