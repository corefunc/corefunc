"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexBasicStripSpaces = void 0;
/**
 * @category RegEx Basic
 * @name regexBasicStripSpaces
 * @description Replace multiple white-spaces in string.
 * @summary ```import { regexBasicStripSpaces } from "@corefunc/corefunc/regex/basic/strip-spaces";```
 * @param {string} text String with white-spaces.
 * @returns {string} String with replaced white-spaces.
 * @since 0.3.27
 * @example ```regexBasicStripSpaces(" too\n   many     \tspaces "); ➜ "too many spaces"```
 */
function regexBasicStripSpaces(text) {
    return text.replace(/\s\s+/g, " ").trim();
}
exports.regexBasicStripSpaces = regexBasicStripSpaces;
