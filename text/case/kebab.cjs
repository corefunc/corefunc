"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseKebab = void 0;
const string_1 = require("../../cast/to/string.cjs");
/**
 * @category Text Case
 * @name textCaseKebab
 * @description Converts string into kebab-case.
 * @param {String} text
 * @returns {String}
 * @see https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
 */
function textCaseKebab(text) {
  return string_1.castToString(text)
    .split("")
    .map((letter, index) => {
      if (letter.toUpperCase() === letter) {
        return `${index !== 0 ? "-" : ""}${letter.toLowerCase()}`;
      }
      else {
        return letter;
      }
    })
    .join("");
}
exports.textCaseKebab = textCaseKebab;
