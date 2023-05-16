/**
 * @name arrayToSorted
 * @category Array To
 * @description Sorts an array. Returns a new array.
 * @summary ```import { arrayToSorted } from '@corefunc/corefunc/array/to/sorted';```
 * @param {Array} array Array to sort.
 * @param {(a: any, b: any) => number} [compareFn] Optional. Function that defines the sort order.
 * @returns {Array} Sorted array.
 * @since 0.3.62
 */
export declare function arrayToSorted<T>(array: T[], compareFn?: (a: T, b: T) => number): T[];
