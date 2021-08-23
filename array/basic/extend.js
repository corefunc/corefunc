"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayBasicExtend = void 0;
const unique_1 = require("../get/unique");
/**
 * @category Array Basic
 * @name arrayBasicExtend
 * @description Extend one array with another.
 * @param {Array=} [alpha] First array.
 * @param {Array=} [beta] Second array.
 * @param {Boolean=} [shouldBeUnique=false] Is resulting array should have unique values.
 * @returns {Array} Resulting array.
 */
function arrayBasicExtend(alpha = [], beta = [], shouldBeUnique = false) {
    const extendedArray = alpha.slice(0);
    extendedArray.push(...beta.slice(0));
    if (shouldBeUnique) {
        return unique_1.arrayGetUnique(extendedArray);
    }
    return extendedArray;
}
exports.arrayBasicExtend = arrayBasicExtend;
