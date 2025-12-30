import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./empty.js";

test("module loads: object/is/empty.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: object/is/empty.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
