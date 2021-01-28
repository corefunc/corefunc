"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsSimilar = void 0;
const string_1 = require("../../cast/to/string.js");
const ranged_1 = require("../../number/ranged.js");
const references_1 = require("../clear/references.js");
const comparable_1 = require("./comparable.js");
const similarity_1 = require("../find/similarity.js");
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
  if (comparable_1.stringIsComparable(strFirst, strSecond, false) === true) {
    return true;
  }
  const numInputRating = ranged_1.numberRanged(minRating, 1, 0, 1, false);
  const numSimilarity = similarity_1.stringFindSimilarity(strFirst, strSecond);
  references_1.stringClearReferences(strFirst);
  references_1.stringClearReferences(strFirst);
  return numSimilarity >= numInputRating;
}
exports.stringIsSimilar = stringIsSimilar;
