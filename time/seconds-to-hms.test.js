import test from "node:test";
import assert from "node:assert/strict";
import * as mod from "./seconds-to-hms.js";

test("module loads: time/seconds-to-hms.ts", () => {
  assert.ok(mod, "module should import without throwing");
});

test("timeSecondsToHms should format seconds correctly", () => {
  assert.equal(mod.timeSecondsToHms(1800), "30 minutes");
  assert.equal(mod.timeSecondsToHms(3725), "1 hour, 2 minutes, 5 seconds");
  assert.equal(mod.timeSecondsToHms(3600), "1 hour");
  assert.equal(mod.timeSecondsToHms(3660), "1 hour, 1 minute");
  assert.equal(mod.timeSecondsToHms(60), "1 minute");
  assert.equal(mod.timeSecondsToHms(61), "1 minute, 1 second");
  assert.equal(mod.timeSecondsToHms(1), "1 second");
  assert.equal(mod.timeSecondsToHms(0), "");
  assert.equal(mod.timeSecondsToHms(7200), "2 hours");
  assert.equal(mod.timeSecondsToHms(120), "2 minutes");
  assert.equal(mod.timeSecondsToHms(2), "2 seconds");
});
