"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringContains = void 0;
const string_1 = require("../cast/to/string");
const clearReferences_1 = require("./clearReferences");
/**
 * Perform search in string
 * @param {string} haystack
 * @param {string} needle
 * @param {boolean=} isStrict
 * @returns {boolean}
 */
function stringContains(haystack, needle, isStrict = false) {
    const strHaystack = string_1.castToString(haystack).normalize();
    const strNeedle = string_1.castToString(needle).normalize();
    if (isStrict) {
        clearReferences_1.default(strHaystack);
        clearReferences_1.default(strNeedle);
        return haystack.includes(needle);
    }
    const contains = strHaystack.toLowerCase().includes(strNeedle.toLowerCase());
    clearReferences_1.default(strHaystack);
    clearReferences_1.default(strNeedle);
    return contains;
}
exports.stringContains = stringContains;
