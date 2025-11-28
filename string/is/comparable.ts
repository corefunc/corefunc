import { castToString } from "../../cast/to/string.js";
import { stringClearReferences } from "../clear/references.js";

/**
 * Compare two strings
 * @param {string} first
 * @param {string} second
 * @param {boolean} isStrict
 * @returns {boolean}
 */
export function stringIsComparable(first: string, second: string, isStrict: boolean = false): boolean {
  const stringOne = castToString(first).normalize();
  const stringTwo = castToString(second).normalize();
  if (stringOne.length !== stringTwo.length) {
    stringClearReferences(stringOne);
    stringClearReferences(stringTwo);
    return false;
  }
  if (isStrict) {
    const isSame = stringOne.localeCompare(stringTwo) === 0;
    stringClearReferences(stringOne);
    stringClearReferences(stringTwo);
    return isSame;
  }
  const isSame = stringOne.toLowerCase().localeCompare(stringTwo.toLowerCase()) === 0;
  stringClearReferences(stringOne);
  stringClearReferences(stringTwo);
  return isSame;
}
