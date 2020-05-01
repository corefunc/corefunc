"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name arrayKeyLast
 * @param {Array} array
 * @returns {null|*}
 */
function arrayKeyLast(array) {
  if (array.length) {
    return array.keys()[array.length - 1];
  }
  return null;
}
exports.default = arrayKeyLast;
