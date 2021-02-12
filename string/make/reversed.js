"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringMakeReversed = void 0;
/**
 * @name stringMakeReversed
 * @description Reverse string
 * @returns {String} Reversed string
 * @since 0.1.32
 */
function stringMakeReversed(text) {
    return Array.from(text).reverse().join("");
}
exports.stringMakeReversed = stringMakeReversed;
