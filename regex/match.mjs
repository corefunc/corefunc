import isString from "../is/string.mjs";
import toRegExp from "../cast/to/regexp.mjs";
import toString from "../cast/to/string.mjs";

/**
 * Executes a search for a match between a regular expression and a specified string.
 * @param {String} string
 * @param {Array|RegExp|String} pattern
 * @param {*=false} onFail
 * @return {Boolean}
 */
export default function regexMatch(string, pattern, onFail = false) {
  if (isString(string) === false) {
    return onFail;
  }
  const regexp = toRegExp(pattern);
  if (regexp === false) {
    return onFail;
  }
  return regexp.test(toString(string));
}
