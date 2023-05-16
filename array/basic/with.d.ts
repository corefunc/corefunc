/**
 * @name arrayBasicWith
 * @category Array Basic
 * @description Change the value of a given index. It returns a new array.
 * @summary ```import { arrayBasicWith } from '@corefunc/corefunc/array/basic/with';```
 * @param {Array} array The array to copy and change.
 * @param {number} index The index of the element to change.
 * @param {unknown} value The value to set.
 * @param {boolean=} [suppressErrors=true] Suppress errors if range is incorrect.
 * @returns {Array} A new array with the element at index replaced with value.
 * @throws {RangeError} Incorrect index.
 * @since 0.3.62
 * @example
 * ```javascript
 * const array = [1, 2, 3];
 * const index = 2;
 * if (index in array) {
 *   const copy = arrayBasicWith(array, index, 300);
 *   console.log(array); // [1, 2, 3]
 *   console.log(copy); // [1, 2, 300]
 * }
 * ```
 */
export declare function arrayBasicWith<T>(array: T[], index: number, value: unknown, suppressErrors?: boolean): T[];
