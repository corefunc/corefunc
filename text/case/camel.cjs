"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseCamel = void 0;
/**
 * @name textCaseCamel
 * @description Converts string into camelCase.
 * @param {string} text
 * @param {boolean=false} firstCapital
 * @returns {string}
 * @see http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
 */
function textCaseCamel(text, firstCapital = false) {
  return text.replace(/^([A-Z])|[\s-_](\w)/g, function (match, p1, p2, offset) {
    if (firstCapital === true && offset === 0) {
      return p1;
    }
    if (p2) {
      return p2.toUpperCase();
    }
    return p1.toLowerCase();
  });
}
exports.textCaseCamel = textCaseCamel;
