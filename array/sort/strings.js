/**
 * @name arraySortStrings
 * @category Array
 * @description Sort an array of strings. Creates a new array.
 * @summary ```import { arraySortStrings } from '@corefunc/corefunc/array/sort/strings';```
 * @param {string[]} array Array of strings.
 * @returns {string[]} Sorted array of strings.
 */
export function arraySortStrings(array) {
  return Array.from(array).sort((alpha, beta) => alpha.localeCompare(beta));
}
