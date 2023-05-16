"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayToReversed = void 0;
/**
 * @name arrayToReversed
 * @category Array To
 * @description Returns a new array with the elements in reversed order.
 * @summary ```import { arrayToReversed } from '@corefunc/corefunc/array/to/reversed';```
 * @param {Array} array Array to reverse.
 * @returns {Array} Reversed array.
 * @since 0.3.62
 */
function arrayToReversed(array) {
    return Array.from(array).reverse();
}
exports.arrayToReversed = arrayToReversed;
