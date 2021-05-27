"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseWaitForever = void 0;
/**
 * @category Promise
 * @name promiseWaitForever
 * @description Promise that never resolves.
 * @returns {Promise<undefined>}
 */
function promiseWaitForever() {
  return new Promise(() => { });
}
exports.promiseWaitForever = promiseWaitForever;
