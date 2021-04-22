"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseTitle = void 0;
/**
 * @category Text Case
 * @name textCaseTitle
 * @description Converts string into title-case.
 * @param {string} text
 * @returns {string}
 * @see http://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript
 */
function textCaseTitle(text) {
    return text.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
exports.textCaseTitle = textCaseTitle;
