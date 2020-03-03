import isString from "../is/isString";
import toRegExp from "../cast/toRegExp";
import toString from "../cast/toString";

/**
 * Executes a search for a match between a regular expression and a specified string.
 * @param {String} string
 * @param {Array|RegExp|String} pattern
 * @param {*=false} onFail
 * @return {Boolean}
 */
export default function regexMatch(
  string: string,
  pattern: string | string[] | RegExp | RegExp[],
  onFail: boolean = false,
): boolean {
  if (isString(string) === false) {
    return onFail;
  }
  const regexp = toRegExp(pattern);
  if (regexp === false) {
    return onFail;
  }
  return regexp.test(toString(string));
}
