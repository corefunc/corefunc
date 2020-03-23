const castToString = require("../cast/to/string.cjs");
const stringClearReferences = require("./clearReferences.cjs");

/**
 * Perform search in string
 * @param {string} haystack
 * @param {string} needle
 * @param {boolean=} isStrict
 * @returns {boolean}
 */
module.exports = function stringContains(haystack, needle, isStrict = false) {
  const strHaystack = castToString(haystack).normalize();
  const strNeedle = castToString(needle).normalize();
  if (isStrict) {
    stringClearReferences(strHaystack);
    stringClearReferences(strNeedle);
    return haystack.includes(needle);
  }
  const contains = strHaystack.toLowerCase().includes(strNeedle.toLowerCase());
  stringClearReferences(strHaystack);
  stringClearReferences(strNeedle);
  return contains;
};
