import castToString from "../cast/to/string.mjs";
import stringClearReferences from "./clearReferences.mjs";

/**
 * Compare two strings
 * @param {string} first
 * @param {string} second
 * @param {boolean} isStrict
 * @returns {boolean}
 */
export default function stringCompare(first, second, isStrict = false) {
  let stringOne = castToString(first).normalize();
  let stringTwo = castToString(second).normalize();
  if (stringOne.length !== stringTwo.length) {
    stringClearReferences(stringOne);
    stringClearReferences(stringTwo);
    return false;
  }
  if (isStrict) {
    const isSame = stringOne.localeCompare(stringTwo) === 0;
    stringClearReferences(stringOne);
    stringClearReferences(stringTwo);
    return isSame;
  }
  const isSame = stringOne.toLowerCase().localeCompare(stringTwo.toLowerCase()) === 0;
  stringClearReferences(stringOne);
  stringClearReferences(stringTwo);
  return isSame;
}
