"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNil = void 0;
/**
 * @name isNil
 * @description Checks if `value` is `null` or `undefined`.
 * @param {*} value - The value to check
 * @returns {Boolean}
 */
function isNil(value) {
  return value === null || value === undefined;
}
exports.isNil = isNil;
