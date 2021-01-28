import { castToString } from "../../cast/to/string";
import { stringClearReferences } from "../clear/references";

/**
 * Perform search in string
 * @param {string} haystack
 * @param {string} needle
 * @param {boolean=} isStrict
 * @returns {boolean}
 */
export function stringIsContain(haystack: string, needle: string, isStrict: boolean = false): boolean {
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
}
