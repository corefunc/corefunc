"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexMakeEscaped = void 0;
const charsToEscape = /[\\^$.*+?()[\]{}|]/g;
const hasCharsToEscape = RegExp(charsToEscape.source);
/**
 * @name regexMakeEscaped
 * @description Escapes `RegExp` special characters
 * @param {string} [text=''] Text to escape
 * @returns {string} Escaped text
 * @since 0.1.12
 */
function regexMakeEscaped(text) {
  return text && hasCharsToEscape.test(text) ? text.replace(charsToEscape, "\\$&") : text || "";
}
exports.regexMakeEscaped = regexMakeEscaped;
