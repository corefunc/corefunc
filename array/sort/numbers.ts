/**
 * @name arraySortNumbers
 * @description Sort an array of numbers. Creates a new array.
 * @category Array Sort
 * @summary ```import { arraySortNumbers } from '@corefunc/corefunc/array/sort/numbers';```
 * @param {Array} array Array of numbers.
 * @returns {Array} Sorted array of numbers.
 */
export function arraySortNumbers(array: number[]): number[] {
  return Array.from(array).sort((alpha, beta) => alpha - beta);
}
