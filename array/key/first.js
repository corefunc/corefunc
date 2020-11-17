"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name arrayKeyFirst
 * @param {Array} array
 * @returns {null|*}
 */
function arrayKeyFirst(array) {
    if (array.length) {
        return array.keys()[0];
    }
    return null;
}
exports.default = arrayKeyFirst;
