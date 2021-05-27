"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsSame = void 0;
/**
 * Returns true if the values are the same value, false otherwise.
 * @param {*} value1
 * @param {*} value2
 * @returns {boolean}
 */
function checkIsSame(value1, value2) {
  return Object.is(value1, value2);
}
exports.checkIsSame = checkIsSame;
