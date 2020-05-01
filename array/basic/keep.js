"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name arrayBasicKeep
 * @description Returns the elements of an array that meet the condition specified in a callback function.
 * @param {Array} array The array arrayBasicKeep was called upon.
 * @param {Function} iteratee A function that accepts up to three arguments. The filter method calls the callbackfn function one time for each element in the array.
 * @returns {Array} Returns the new filtered array.
 * @see https://twitter.com/rauschma/status/1253457185092308993
 */
function arrayBasicKeep(array, iteratee) {
    return array.filter(iteratee);
}
exports.default = arrayBasicKeep;
