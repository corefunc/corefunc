"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.langSleep = void 0;
/**
 * @name langSleep
 * @description Sleep ES queue code execution for requested time
 * @param {Number} timeout
 * @returns {Promise<void>}
 */
async function langSleep(timeout = 1) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}
exports.langSleep = langSleep;
