import fnLowerCase from "lodash-es/lowerCase";
import fnToString from "lodash-es/toString";

/**
 * Compare two strings
 * @param {string} stringFirst
 * @param {string} stringSecond
 * @param {boolean} isStrict
 * @returns {boolean}
 */
function compare(stringFirst, stringSecond, isStrict = false) {
  let stringOne = fnToString(stringFirst);
  let stringTwo = fnToString(stringSecond);
  if (stringOne.length !== stringTwo.length) {
    return false;
  }
  if (isStrict) {
    return stringOne.localeCompare(stringTwo) === 0;
  }
  stringOne = fnLowerCase(stringOne);
  stringTwo = fnLowerCase(stringTwo);
  return stringOne === stringTwo;
}

export default compare;
