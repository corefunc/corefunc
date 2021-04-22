"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicExtend = void 0;
const unique_1 = require("../get/unique.cjs");
/**
 * @category Array Basic
 * @name arrayBasicExtend
 * @description Extend one array with another.
 * @param {Array=} alpha
 * @param {Array=} beta
 * @param {Boolean=} [shouldBeUnique=false]
 * @returns {Array}
 */
function arrayBasicExtend(alpha = [], beta = [], shouldBeUnique = false) {
  const extendedArray = alpha.slice(0);
  extendedArray.push(...beta.slice(0));
  if (shouldBeUnique) {
    return unique_1.arrayGetUnique(extendedArray);
  }
  return extendedArray;
}
exports.arrayBasicExtend = arrayBasicExtend;
