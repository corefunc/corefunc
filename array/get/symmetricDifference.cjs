"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayGetSymmetricDifference = void 0;
/**
 * @name arrayGetSymmetricDifference
 * @description Get array symmetric difference
 * @param {Array} alpha First array
 * @param {Array} beta Second array
 * @returns {Array} Array with difference
 * @since 0.1.35
 */
function arrayGetSymmetricDifference(alpha, beta) {
  return alpha.filter((value) => !beta.includes(value)).concat(beta.filter((value) => !alpha.includes(value)));
}
exports.arrayGetSymmetricDifference = arrayGetSymmetricDifference;
