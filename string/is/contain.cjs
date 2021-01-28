"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsContain = void 0;
const string_1 = require("../../cast/to/string.cjs");
const references_1 = require("../clear/references.cjs");
/**
 * Perform search in string
 * @param {string} haystack
 * @param {string} needle
 * @param {boolean=} isStrict
 * @returns {boolean}
 */
function stringIsContain(haystack, needle, isStrict = false) {
  const strHaystack = string_1.castToString(haystack).normalize();
  const strNeedle = string_1.castToString(needle).normalize();
  if (isStrict) {
    references_1.stringClearReferences(strHaystack);
    references_1.stringClearReferences(strNeedle);
    return haystack.includes(needle);
  }
  const contains = strHaystack.toLowerCase().includes(strNeedle.toLowerCase());
  references_1.stringClearReferences(strHaystack);
  references_1.stringClearReferences(strNeedle);
  return contains;
}
exports.stringIsContain = stringIsContain;
