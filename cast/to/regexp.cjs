const isRegExp = require("../../is/regexp.cjs");
const isString = require("../../is/string.cjs");

/**
 * @param pattern {Array|RegExp|String}
 * @return {Boolean|RegExp}
 */
module.exports = function castToRegExp(pattern) {
  if (isRegExp(pattern)) {
    return pattern;
  }
  if (isString(pattern)) {
    return new RegExp(pattern);
  }
  if (Array.isArray(pattern)) {
    if (isString(pattern[0]) === false) {
      return false;
    }
    if (isString(pattern[1]) === true) {
      return new RegExp(pattern[0], pattern[1]);
    }
    return new RegExp(pattern[0]);
  }
  return false;
};
