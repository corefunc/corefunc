/**
 * @category Check
 * @name checkIsTypedArray
 * @description Checks if an array is typed.
 * @summary ```import { checkIsTypedArray } from '@corefunc/corefunc/check/is-typed-array';```
 * @param {*} [value] Value to check.
 * @returns {boolean} Is typed array.
 * @example ```checkIsTypedArray([]) ➜ false```
 * @example ```checkIsTypedArray(new Int16Array(1)) ➜ true```
 * @example ```checkIsTypedArray(new Float64Array(1)) ➜ true```
 * @example ```checkIsTypedArray(new Uint32Array(1)) ➜ true```
 * @since 0.1.68
 */
export function checkIsTypedArray(value: any): boolean {
  if (!value || Array.isArray(value)) {
    return false;
  }
  const proto = Object.prototype.toString.call(value).toLowerCase();
  return proto.length > 14 && proto.startsWith("[object ") && proto.endsWith("array]");
}
