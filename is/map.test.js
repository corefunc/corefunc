import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./map.js";

test("module loads: is/map.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/map.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isMap with Map", () => {
  assert.strictEqual(mod.isMap(new Map()), true);
});

test("isMap with object", () => {
  assert.strictEqual(mod.isMap({}), false);
});
