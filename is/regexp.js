"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {*} value
 * @returns {boolean}
 */
function isRegExp(value) {
    return value instanceof RegExp;
}
exports.default = isRegExp;
