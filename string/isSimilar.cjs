"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsSimilar = void 0;
const string_1 = require("../cast/to/string.cjs");
const ranged_1 = require("../number/ranged.cjs");
const clearReferences_1 = require("./clearReferences.cjs");
const compare_1 = require("./compare.cjs");
const similarity_1 = require("./similarity.cjs");
/**
 * Finds degree of similarity between two strings using Sørensen–Dice coefficient
 * @param {string} alpha
 * @param {string} beta
 * @param {Number} [minRating=0.85]
 * @returns {boolean}
 */
function stringIsSimilar(alpha, beta, minRating = 0.85) {
  const strFirst = string_1.castToString(alpha).normalize();
  const strSecond = string_1.castToString(beta).normalize();
  if (compare_1.stringCompare(strFirst, strSecond, false) === true) {
    return true;
  }
  const numInputRating = ranged_1.default(minRating, 1, 0, 1, false);
  const numSimilarity = similarity_1.default(strFirst, strSecond);
  clearReferences_1.default(strFirst);
  clearReferences_1.default(strFirst);
  return numSimilarity >= numInputRating;
}
exports.stringIsSimilar = stringIsSimilar;
