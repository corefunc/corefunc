"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayKeyFirst = void 0;
/**
 * @name arrayKeyFirst
 * @param {Array} array
 * @returns {null|*}
 */
function arrayKeyFirst(array) {
  if (array.length) {
    return array.keys()[0];
  }
  return null;
}
exports.arrayKeyFirst = arrayKeyFirst;
