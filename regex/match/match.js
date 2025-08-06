import { isString } from "../../is/string.js";
import { castToRegExp } from "../../cast/to/regexp.js";
import { castToString } from "../../cast/to/string.js";

/**
 * @category RegEx Match
 * @name regexMatch
 * @description Executes a search for a match between a regular expression and a specified string.
 * @param {String} string
 * @param {RegExp | [string, string] | string} pattern
 * @param {*=false} onFail
 * @return {Boolean}
 */
export function regexMatch(string, pattern, onFail) {
  if (isString(string) === false) {
    return onFail;
  }
  const regexp = castToRegExp(pattern);
  if (!regexp) {
    return onFail;
  }
  return regexp.test(castToString(string));
}
