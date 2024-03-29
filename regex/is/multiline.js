"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexIsMultiline = void 0;
/**
 * @category RegEx Is
 * @name regexIsMultiline
 * @description Checks if a line has line breaks
 * @param {String} text Text to check for line breaks
 * @returns {Boolean}
 * @example regexIsMultiline("📕📗\n📘📖") ➜ true
 * @since 0.0.98
 */
function regexIsMultiline(text) {
    if (typeof text !== "string") {
        return false;
    }
    return /\r?\n|\r/g.test(text);
}
exports.regexIsMultiline = regexIsMultiline;
