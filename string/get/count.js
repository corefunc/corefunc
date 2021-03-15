"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringGetCount = void 0;
/**
 * @name stringGetCount
 * @description Get count of symbols in text. This is not string length.
 * @param {String} text The string being measured for length.
 * @returns {Number}
 */
function stringGetCount(text) {
    return [...text].length;
}
exports.stringGetCount = stringGetCount;
