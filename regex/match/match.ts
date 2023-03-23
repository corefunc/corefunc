import { isString } from "../../is/string";
import { castToRegExp } from "../../cast/to/regexp";
import { castToString } from "../../cast/to/string";

/**
 * @category RegEx Match
 * @name regexMatch
 * @description Executes a search for a match between a regular expression and a specified string.
 * @param {String} string
 * @param {RegExp | [string, string] | string} pattern
 * @param {*=false} onFail
 * @return {Boolean}
 */
export function regexMatch(
  string: string,
  pattern: RegExp | [string, string] | string,
  onFail: boolean = false,
): boolean {
  if (isString(string) === false) {
    return onFail;
  }
  const regexp = castToRegExp(pattern);
  if (!regexp) {
    return onFail;
  }
  return (regexp as RegExp).test(castToString(string));
}
