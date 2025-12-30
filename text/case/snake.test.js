import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./snake.js";

test("module loads: text/case/snake.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: text/case/snake.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});
