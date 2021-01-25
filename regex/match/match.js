"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexMatch = void 0;
const string_1 = require("../../is/string.js");
const regexp_1 = require("../../cast/to/regexp.js");
const string_2 = require("../../cast/to/string.js");
/**
 * Executes a search for a match between a regular expression and a specified string.
 * @param {String} string
 * @param {Array|RegExp|String} pattern
 * @param {*=false} onFail
 * @return {Boolean}
 */
function regexMatch(string, pattern, onFail = false) {
  if (string_1.isString(string) === false) {
    return onFail;
  }
  const regexp = regexp_1.castToRegExp(pattern);
  if (regexp === false) {
    return onFail;
  }
  return regexp.test(string_2.castToString(string));
}
exports.regexMatch = regexMatch;
