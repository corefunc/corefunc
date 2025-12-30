import test from "node:test";
import assert from "node:assert/strict";
import { cliExit } from "./exit.js";

test("should be a function", () => {
  assert.strictEqual(typeof cliExit, "function");
});

test("should handle false without exiting", () => {
  assert.doesNotThrow(() => cliExit(false));
});

test("should handle invalid code by not exiting", () => {
  assert.doesNotThrow(() => cliExit(-1));
});
