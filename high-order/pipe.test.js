import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./pipe.js";

test("module loads: high-order/pipe.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: high-order/pipe.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
