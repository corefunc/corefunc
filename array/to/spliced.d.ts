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
export declare function arrayToSpliced<T>(array: T[], start: number, deleteCount: number, ...items: T[]): T[];
