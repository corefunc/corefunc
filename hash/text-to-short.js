"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashTextToShort = void 0;
/**
 * @name hashTextToShort
 * @description Hash text to shorter version
 * @param {String} text Text to be hashed
 * @returns {Number}
 * @example hashTextToShort("This is for you senpai 🍱") ➜ "32f37f2c"
 * @since 0.0.78
 */
function hashTextToShort(text) {
    let hash = 5381;
    let index = text.length;
    while (index) {
        hash = (hash * 33) ^ text.charCodeAt(--index);
    }
    return (hash >>> 0).toString(16);
}
exports.hashTextToShort = hashTextToShort;
