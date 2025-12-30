import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./array-buffer.js";

test("module loads: convert/string/array-buffer.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("exports type check: convert/string/array-buffer.ts", () => {
  const imported = typeof mod;
  assert.ok(imported === "object" || imported === "function", "module should export object or function");
});

test("convertStringToArrayBuffer: basic conversion", () => {
  const str = "abc";
  const buffer = mod.convertStringToArrayBuffer(str);
  assert.ok(buffer instanceof ArrayBuffer);
  assert.strictEqual(buffer.byteLength, str.length * 2);

  const view = new Uint16Array(buffer);
  assert.strictEqual(view[0], str.charCodeAt(0));
  assert.strictEqual(view[1], str.charCodeAt(1));
  assert.strictEqual(view[2], str.charCodeAt(2));
});

test("convertStringToArrayBuffer: empty string", () => {
  const buffer = mod.convertStringToArrayBuffer("");
  assert.strictEqual(buffer.byteLength, 0);
});
