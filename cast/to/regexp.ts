import { isRegExp } from "../../is/regexp";
import { isString } from "../../is/string";

/**
 * @param {Array|RegExp|string} pattern
 * @returns {boolean|RegExp}
 */
export function castToRegExp(pattern): boolean | RegExp {
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
}