"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name sleep
 * @description Sleep ES queue code execution for requested time
 * @param {Number} timeout
 * @returns {Promise<void>}
 */
async function sleep(timeout = 1) {
  return new Promise((resolve) => setTimeout(resolve, timeout));
}
exports.sleep = sleep;
