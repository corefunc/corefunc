"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashTextToNumber = void 0;
/**
 * @name hashTextToNumber
 * @description Hash text to number
 * @param {String} text Text to be hashed
 * @returns {Number}
 * @example hashTextToNumber("This is for you senpai 🍱") ➜ 854818604
 * @since 0.0.78
 */
function hashTextToNumber(text) {
    let hash = 5381;
    let index = text.length;
    while (index) {
        hash = (hash * 33) ^ text.charCodeAt(--index);
    }
    return hash >>> 0;
}
exports.hashTextToNumber = hashTextToNumber;
