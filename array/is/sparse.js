"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arrayIsSparse = void 0;
/**
 * @category Array Is
 * @name arrayIsSparse
 * @description Check is array sparse.
 * @param {Array} [array]
 * @returns {boolean}
 * @since 0.3.5
 */
function arrayIsSparse(array) {
    return array.length > Object.keys(array).length;
}
exports.arrayIsSparse = arrayIsSparse;
