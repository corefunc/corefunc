"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToRegExp = void 0;
const regexp_1 = require("../../is/regexp.cjs");
const string_1 = require("../../is/string.cjs");
/**
 * @param {Array|RegExp|string} pattern
 * @returns {boolean|RegExp}
 */
function castToRegExp(pattern) {
  if (regexp_1.isRegExp(pattern)) {
    return pattern;
  }
  if (string_1.isString(pattern)) {
    return new RegExp(pattern);
  }
  if (Array.isArray(pattern)) {
    if (string_1.isString(pattern[0]) === false) {
      return false;
    }
    if (string_1.isString(pattern[1]) === true) {
      return new RegExp(pattern[0], pattern[1]);
    }
    return new RegExp(pattern[0]);
  }
  return false;
}
exports.castToRegExp = castToRegExp;
