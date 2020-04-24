"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @description A specialized version of `map` for arrays without support for iteratee shorthands.
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayBasicMap(array, iteratee) {
    var length = array.length;
    length = length || 0;
    var index = -1;
    var result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
exports.default = arrayBasicMap;
