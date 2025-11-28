/**
 * @category Check Type
 * @name checkIsTypedArray
 * @description Checks if an array is typed.
 * @summary ```import { checkIsTypedArray } from '@corefunc/corefunc/check/is-typed-array';```
 * @param {*} [value] Value to check.
 * @returns {boolean} Is typed array.
 * @example Usage:
 * ```ts
 * checkIsTypedArray([]) // ➜ false
 * checkIsTypedArray(new Int16Array(1)) // ➜ true
 * checkIsTypedArray(new Float64Array(1)) // ➜ true
 * checkIsTypedArray(new Uint32Array(1)) // ➜ true
 * ```
 * @since 0.1.68
 */
export declare function checkIsTypedArray(value: any): boolean;
