"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.textCaseCapitalize = void 0;
const string_1 = require("../../cast/to/string");
/**
 * @category Text Case
 * @name textCaseCapitalize
 * @description Capitalize first letter
 * @summary ```import { textCaseCapitalize } from "@corefunc/corefunc/text/case/capitalize";```
 * @param {String} [text] Text to transform
 * @returns {String} Capitalized first letter
 * @since 0.1.31
 */
function textCaseCapitalize(text) {
    const string = string_1.castToString(text).normalize();
    return string.charAt(0).toUpperCase() + string.slice(1);
}
exports.textCaseCapitalize = textCaseCapitalize;
