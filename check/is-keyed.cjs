"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsKeyed = void 0;
/**
 * @param {*} value
 * @return {boolean}
 */
function checkIsKeyed(value) {
  return value instanceof Set || value instanceof Map;
}
exports.checkIsKeyed = checkIsKeyed;
