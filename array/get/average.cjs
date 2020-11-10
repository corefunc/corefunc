"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayGetAverage = void 0;
/**
 * @name arrayGetAverage
 * @param {Array.<Number>} array
 * @returns  {Number}
 */
function arrayGetAverage(array) {
  return array.reduce((alpha, beta) => alpha + beta) / array.length;
}
exports.arrayGetAverage = arrayGetAverage;
