"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
/**
 * @category Is
 * @name isString
 * @description Checks if a given value is string.
 * @param {*} value
 * @returns {Boolean}
 */
function isString(value) {
  if (typeof value === "string") {
    return true;
  }
  return Object.prototype.toString.call(String(value)) === "[object String]";
}
exports.isString = isString;
