"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayGetAt = void 0;
const is_array_like_1 = require("../../check/is-array-like");
/**
 * @name arrayGetAt
 * @description Get the value at the index of an array. Supports negative index.
 * @param {Array} array
 * @param {Number} index
 * @param {*=} onFail
 * @returns {*}
 * @example arrayGetAt(["🍌", "🍏", "🍇", "🍊"], -2) ➜ "🍇"
 * @since 0.0.96
 */
function arrayGetAt(array, index, onFail) {
    if (!is_array_like_1.isArrayLike(array) || !Number.isInteger(index)) {
        return onFail;
    }
    const relativeIndex = index >= 0 ? index : array.length + index;
    if (relativeIndex < 0 || relativeIndex >= array.length) {
        return onFail;
    }
    return array[relativeIndex];
}
exports.arrayGetAt = arrayGetAt;
