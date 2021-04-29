import { checkIsPrimitive } from "../check/isPrimitive.mjs";
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
      return Boolean(value.length);
    }
    return Boolean(value);
  }
  if (Array.isArray(value)) {
    return Boolean(value.length);
  }
  if (value instanceof Set) {
    return Boolean(value.size);
  }
  if (value instanceof Map) {
    return Boolean(value.size);
  }
  return Boolean(Object.keys(value).length);
}
