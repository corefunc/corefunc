import fnToString from "lodash-es/toString";

import { compareTwoStrings as fnStrSimilar } from "string-similarity";

import fnCompare from "./compare";
import fnToRange from "../cast/toRange";

/**
 * Finds degree of similarity between two strings using Sørensen–Dice coefficient
 * @param {string} stringFirst
 * @param {string} stringSecond
 * @param {Number} [numMinRating=0.85]
 * @returns {boolean}
 */
function similar(stringFirst, stringSecond, numMinRating = 0.85) {
  const stringOne = fnToString(stringFirst);
  const stringTwo = fnToString(stringSecond);
  if (fnCompare(stringOne, stringTwo, false) === true) {
    return true;
  }
  const numInputRating = fnToRange(numMinRating, 1, 0, 1, false);
  const numSimilarity = fnStrSimilar(stringOne, stringTwo);
  return numSimilarity >= numInputRating;
}

export default similar;
