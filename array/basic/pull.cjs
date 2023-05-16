"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicPull = void 0;
/**
 * @name arrayBasicPull
 * @category Array Basic
 * @description Remove all occurrences of value from array. Creates new array.
 * @summary ```import { arrayBasicPull } from '@corefunc/corefunc/array/basic/pull';```
 * @param {Array} array Array of any values.
 * @param {any} value Value to remove from array.
 * @returns {Array} New array without value.
 * @example arrayBasicPull([1, 2, 3, 4, 5, 3, 6, 7, 3, 9], 3); // [1, 2, 4, 5, 6, 7, 9]
 */
function arrayBasicPull(array, value) {
  if (array.length === 0) {
    return [];
  }
  const copy = Array.from(array);
  const indexOf = copy.indexOf(value);
  if (indexOf === -1) {
    return copy;
  }
  copy.splice(indexOf, 1);
  if (copy.length === 0) {
    return [];
  }
  if (copy.indexOf(value) === -1) {
    return copy;
  }
  return arrayBasicPull(copy, value);
}
exports.arrayBasicPull = arrayBasicPull;
