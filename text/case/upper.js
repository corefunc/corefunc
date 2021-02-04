"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseUpper = void 0;
const string_1 = require("../../cast/to/string");
/**
 * @name textCaseUpper
 * @description Converts string into upper-case. Converts and normalizes the string before conversion.
 * @param {String} text Text to transform
 * @returns {String} Uppercase text
 * @since 0.1.31
 */
function textCaseUpper(text) {
    return string_1.castToString(text).normalize().toUpperCase();
}
exports.textCaseUpper = textCaseUpper;
