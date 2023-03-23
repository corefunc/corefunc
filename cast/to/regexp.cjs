"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToRegExp = void 0;
const regexp_1 = require("../../is/regexp.cjs");
const string_1 = require("../../is/string.cjs");
/**
 * @param {RegExp|[string,string]|string} pattern
 * @returns {RegExp|undefined}
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
      return undefined;
    }
    if (string_1.isString(pattern[1]) === true) {
      return new RegExp(pattern[0], pattern[1]);
    }
    return new RegExp(pattern[0]);
  }
  return undefined;
}
exports.castToRegExp = castToRegExp;
