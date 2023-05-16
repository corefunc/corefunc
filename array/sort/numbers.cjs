"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arraySortNumbers = void 0;
/**
 * @name arraySortNumbers
 * @description Sort an array of numbers. Creates a new array.
 * @category Array Sort
 * @summary ```import { arraySortNumbers } from '@corefunc/corefunc/array/sort/numbers';```
 * @param {Array} array Array of numbers.
 * @returns {Array} Sorted array of numbers.
 */
function arraySortNumbers(array) {
  return Array.from(array).sort((alpha, beta) => alpha - beta);
}
exports.arraySortNumbers = arraySortNumbers;
