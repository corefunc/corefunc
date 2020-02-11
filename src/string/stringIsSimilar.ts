import fnToString from "lodash-es/toString";

import fnCompare from "./compare";
import fnToRange from "../cast/toRange";
import stringSimilarity from "./stringSimilarity";

/**
 * Finds degree of similarity between two strings using Sørensen–Dice coefficient
 * @param {string} stringFirst
 * @param {string} stringSecond
 * @param {Number} [numMinRating=0.85]
 * @returns {boolean}
 */
export default function stringIsSimilar(stringFirst, stringSecond, numMinRating = 0.85) {
  const stringOne = fnToString(stringFirst);
  const stringTwo = fnToString(stringSecond);
  if (fnCompare(stringOne, stringTwo, false) === true) {
    return true;
  }
  const numInputRating = fnToRange(numMinRating, 1, 0, 1, false);
  const numSimilarity = stringSimilarity(stringOne, stringTwo);
  return numSimilarity >= numInputRating;
}
