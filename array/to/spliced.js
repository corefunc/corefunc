"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToSpliced = void 0;
/**
 * @name arrayToSpliced
 * @category Array To
 * @description Array to spliced. Returns a new array with the element at the specified index replaced by the given value.
 * @summary ```import { arrayToSpliced } from '@corefunc/corefunc/array/to/spliced';```
 * @param {Array} array Array to spliced.
 * @param {number} start Index at which to start changing the array.
 * @param {number} deleteCount An integer indicating the number of old array elements to remove.
 * @param {...Array} items The elements to add to the array, beginning at the start index.
 * @returns {Array} Returns a new array with the element at the specified index replaced by the given value.
 * @since 0.3.62
 */
function arrayToSpliced(array, start, deleteCount, ...items) {
    const result = Array.from(array);
    result.splice(start, deleteCount, ...items);
    return result;
}
exports.arrayToSpliced = arrayToSpliced;
