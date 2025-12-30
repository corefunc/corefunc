import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./promise.js";

test("module loads: is/promise.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: is/promise.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("isPromise with Promise", () => {
  assert.strictEqual(mod.isPromise(Promise.resolve()), true);
});

test("isPromise with object", () => {
  assert.strictEqual(mod.isPromise({}), false);
});
