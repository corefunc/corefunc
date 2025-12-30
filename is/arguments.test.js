import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./arguments.js";

test("module loads: is/arguments.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/arguments.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isArguments: returns true for arguments object", () => {
  (function() {
    assert.strictEqual(mod.isArguments(arguments), true);
  }());
});

test("isArguments: returns false for array", () => {
  assert.strictEqual(mod.isArguments([]), false);
});

test("isArguments: returns false for object", () => {
  assert.strictEqual(mod.isArguments({}), false);
});

test("isArguments: returns false for null", () => {
  assert.strictEqual(mod.isArguments(null), false);
});
