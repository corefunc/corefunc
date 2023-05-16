/**
 * @name arrayToReversed
 * @category Array To
 * @description Returns a new array with the elements in reversed order.
 * @summary ```import { arrayToReversed } from '@corefunc/corefunc/array/to/reversed';```
 * @param {any[]} array Array to reverse.
 * @returns {any[]} Reversed array.
 * @since 0.3.62
 */
export function arrayToReversed(array) {
  return Array.from(array).reverse();
}
