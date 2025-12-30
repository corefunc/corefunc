import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./attempt.js";

test("module loads: func/attempt.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: func/attempt.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("funcAttempt: basic function call", () => {
  const add = (alpha, beta) => alpha + beta;
  assert.strictEqual(mod.funcAttempt(add, [1, 2]), 3);
});

test("funcAttempt: with context", () => {
  const obj = {
    val: 10,
    add(alpha) {
      return this.val + alpha;
    },
  };
  assert.strictEqual(mod.funcAttempt(obj.add, [5], obj), 15);
});

test("funcAttempt: catch exceptions true", () => {
  const fail = () => {
    throw new Error("fail");
  };
  assert.strictEqual(mod.funcAttempt(fail, [], null, true), undefined);
});

test("funcAttempt: catch exceptions false (throws)", () => {
  const fail = () => {
    throw new Error("fail");
  };
  assert.throws(() => mod.funcAttempt(fail, [], null, false), /fail/);
});

test("funcAttempt: not a function returns undefined", () => {
  assert.strictEqual(mod.funcAttempt(null), undefined);
});
