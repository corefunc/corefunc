/* eslint-disable no-console */

import test from "node:test";
import assert from "node:assert/strict";
import { cliClear } from "./clear.js";

test("should be a function", () => {
  assert.strictEqual(typeof cliClear, "function");
});

test("should call console.clear if available", () => {
  const originalClear = console.clear;
  let called = false;
  console.clear = () => {
    called = true;
  };
  cliClear();
  console.clear = originalClear;
  assert.strictEqual(called, true);
});

test("should handle missing console.clear", () => {
  const originalClear = console.clear;
  // @ts-expect-error Mocking missing method
  delete console.clear;
  try {
    cliClear();
  } finally {
    console.clear = originalClear;
  }
  assert.ok(true, "should not throw");
});
