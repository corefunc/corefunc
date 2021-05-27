import { checkIsPrimitive } from "../check/is-primitive.mjs";
import { isString } from "../is/string.mjs";

/**
 * @category Is Valid
 * @name isEmpty
 * @description Checks wherever object is empty
 * @summary ```import { isEmpty } from "@corefunc/corefunc/valid/is-empty";```
 * @param {*} [value] Any value.
 * @returns {Boolean}
 */
export function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  }
  if (checkIsPrimitive(value)) {
    if (isString(value)) {
      return value.length === 0;
    }
    return !value;
  }
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (value instanceof Set) {
    return value.size === 0;
  }
  if (value instanceof Map) {
    return value.size === 0;
  }
  return Object.keys(value).length === 0;
}
