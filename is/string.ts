/**
 * @category Is
 * @name isString
 * @description Checks if a given value is a real string.
 * @summary ```import { isString } from "@corefunc/corefunc/is/string";```
 * @param {*} [value] Any value.
 * @returns {Boolean}
 */
export function isString(value: any): value is string {
  return typeof value === "string" || value instanceof String;
}
