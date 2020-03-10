const castToString = require("../cast/to/string.cjs");
const numberRanged = require("../number/ranged.cjs");
const stringClearReferences = require("./clearReferences.cjs");
const stringCompare = require("./compare.cjs");
const stringSimilarity = require("./similarity.cjs");

/**
 * Finds degree of similarity between two strings using Sørensen–Dice coefficient
 * @param {string} alpha
 * @param {string} beta
 * @param {Number} [minRating=0.85]
 * @returns {boolean}
 */
export default function stringIsSimilar(alpha, beta, minRating = 0.85) {
  const strFirst = castToString(alpha).normalize();
  const strSecond = castToString(beta).normalize();
  if (stringCompare(strFirst, strSecond, false) === true) {
    return true;
  }
  const numInputRating = numberRanged(minRating, 1, 0, 1, false);
  const numSimilarity = stringSimilarity(strFirst, strSecond);
  stringClearReferences(strFirst);
  stringClearReferences(strFirst);
  return numSimilarity >= numInputRating;
}
