"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const regexp_1 = require("../../is/regexp");
const string_1 = require("../../is/string");
/**
 * @param {Array|RegExp|string} pattern
 * @returns {boolean|RegExp}
 */
function castToRegExp(pattern) {
    if (regexp_1.default(pattern)) {
        return pattern;
    }
    if (string_1.default(pattern)) {
        return new RegExp(pattern);
    }
    if (Array.isArray(pattern)) {
        if (string_1.default(pattern[0]) === false) {
            return false;
        }
        if (string_1.default(pattern[1]) === true) {
            return new RegExp(pattern[0], pattern[1]);
        }
        return new RegExp(pattern[0]);
    }
    return false;
}
exports.default = castToRegExp;
