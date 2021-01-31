"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicMerge = void 0;
/**
 * @name arrayBasicMerge
 * @description Merge one array into another. Modifies the first array, but less memory consuming.
 * @param {Array} arrayMergeInto The array to which will be added
 * @param {Array} arrayToBeAdded The array to be added
 * @returns {Array}
 * @since 0.1.13
 */
function arrayBasicMerge(arrayMergeInto, arrayToBeAdded) {
    arrayMergeInto.push.apply(arrayMergeInto, arrayToBeAdded);
    return arrayMergeInto;
}
exports.arrayBasicMerge = arrayBasicMerge;
