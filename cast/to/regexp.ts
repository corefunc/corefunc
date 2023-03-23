import { isRegExp } from "../../is/regexp";
import { isString } from "../../is/string";

/**
 * @param {RegExp|[string,string]|string} pattern
 * @returns {RegExp|undefined}
 */
export function castToRegExp(pattern: RegExp | [string, string] | string): RegExp | undefined {
  if (isRegExp(pattern)) {
    return pattern as RegExp;
  }
  if (isString(pattern)) {
    return new RegExp(pattern);
  }
  if (Array.isArray(pattern)) {
    if (isString(pattern[0]) === false) {
      return undefined;
    }
    if (isString(pattern[1]) === true) {
      return new RegExp(pattern[0], pattern[1]);
    }
    return new RegExp(pattern[0]);
  }
  return undefined;
}
