"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseLower = void 0;
const string_1 = require("../../cast/to/string.cjs");
/**
 * @category Text Case
 * @name textCaseLower
 * @description Converts string into lower-case. Converts and normalizes the string before conversion.
 * @param {String} text Text to transform
 * @returns {String} Lower-case text
 * @since 0.1.31
 */
function textCaseLower(text) {
    return string_1.castToString(text).normalize().toLowerCase();
}
exports.textCaseLower = textCaseLower;
