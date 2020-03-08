const castToString = require("../cast/to/string.cjs");
const stringClearReferences = require("./clearReferences.cjs");

/**
 * Compare two strings
 * @param {string} first
 * @param {string} second
 * @param {boolean} isStrict
 * @returns {boolean}
 */
module.exports = function stringCompare(first, second, isStrict = false) {
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
};
