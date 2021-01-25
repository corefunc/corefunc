"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRegExp = void 0;
/**
 * @param {*} value
 * @returns {boolean}
 */
function isRegExp(value) {
  return value instanceof RegExp;
}
exports.isRegExp = isRegExp;
