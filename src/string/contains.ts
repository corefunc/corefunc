import fnLowerCase from "lodash-es/lowerCase";

/**
 * Perform search in string
 * @param {string} haystack
 * @param {string} needle
 * @param {boolean=} isStrict
 * @returns {boolean}
 */
function contains(haystack, needle, isStrict = false) {
  if (isStrict) {
    return haystack.includes(needle);
  }
  return fnLowerCase(haystack).includes(fnLowerCase(needle));
}
export default contains;
