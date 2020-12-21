"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Executes a search for a match between a regular expression and a specified string.
 * @param {String} text
 * @return {Array}
 */
function regexFindNumbers(text) {
    return (text.match(/[+-]?\d+(\.\d+)?/g) || []).map(Number);
}
exports.default = regexFindNumbers;
