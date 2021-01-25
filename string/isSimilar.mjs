import { castToString } from "../cast/to/string.mjs";
import numberRanged from "../number/ranged.mjs";
import stringClearReferences from "./clearReferences.mjs";
import { stringCompare } from "./compare.mjs";
import stringSimilarity from "./similarity.mjs";

/**
 * Finds degree of similarity between two strings using Sørensen–Dice coefficient
 * @param {string} alpha
 * @param {string} beta
 * @param {Number} [minRating=0.85]
 * @returns {boolean}
 */
export function stringIsSimilar(alpha, beta, minRating = 0.85) {
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
