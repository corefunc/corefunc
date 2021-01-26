"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexFindNumbers = void 0;
/**
 * Executes a search for a match between a regular expression and a specified string.
 * @param {String} text
 * @return {Array}
 */
function regexFindNumbers(text) {
    return (text.match(/[+-]?\d+(\.\d+)?/g) || []).map(Number);
}
exports.regexFindNumbers = regexFindNumbers;
