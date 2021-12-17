/**
 * @category Check
 * @name checkIsPrimitive
 * @description Return true on boolean, string, number, BigInt, null, Symbol and undefined
 * @summary ```import { checkIsPrimitive } from "@corefunc/corefunc/check/is-primitive";```
 * @param {*} value
 * @returns {boolean} Returns `true` if the given `value` is a primitive type. Otherwise, returns `false`.
 */
export function checkIsPrimitive(value: unknown): boolean {
  return (typeof value !== "object" && typeof value !== "function") || value === null;
}
