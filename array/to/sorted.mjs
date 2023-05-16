/**
 * @name arrayToSorted
 * @category Array To
 * @description Sorts an array. Returns a new array.
 * @summary ```import { arrayToSorted } from '@corefunc/corefunc/array/to/sorted';```
 * @param {any[]} array Array to sort.
 * @param {(a: any, b: any) => number} [compareFn] Optional. Function that defines the sort order.
 * @returns {any[]} Sorted array.
 * @since 0.3.62
 */
export function arrayToSorted(array, compareFn) {
  return Array.from(array).sort(compareFn);
}
