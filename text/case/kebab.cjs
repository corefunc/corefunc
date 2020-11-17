"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseKebab = void 0;
/**
 * @name textCaseKebab
 * @description Converts string into kebab-case.
 * @param {String} text
 * @returns {String}
 * @see https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
 */
function textCaseKebab(text) {
  return text
    .split("")
    .map((letter, idx) => (letter.toUpperCase() === letter ? `${idx !== 0 ? "-" : ""}${letter.toLowerCase()}` : letter))
    .join("");
}
exports.textCaseKebab = textCaseKebab;
