const isString = require("../is/isString.cjs");
const toRegExp = require("../cast/toRegExp.cjs");
const toString = require("../cast/toString.cjs");

/**
 * Executes a search for a match between a regular expression and a specified string.
 * @param {String} string
 * @param {Array|RegExp|String} pattern
 * @param {*=false} onFail
 * @return {Boolean}
 */
module.exports = function regexMatch(string, pattern, onFail = false) {
  if (isString(string) === false) {
    return onFail;
  }
  const regexp = toRegExp(pattern);
  if (regexp === false) {
    return onFail;
  }
  return regexp.test(toString(string));
};
