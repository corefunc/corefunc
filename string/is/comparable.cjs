"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringIsComparable = void 0;
const string_1 = require("../../cast/to/string.cjs");
const references_1 = require("../clear/references.cjs");
/**
 * Compare two strings
 * @param {string} first
 * @param {string} second
 * @param {boolean} isStrict
 * @returns {boolean}
 */
function stringIsComparable(first, second, isStrict = false) {
  let stringOne = string_1.castToString(first).normalize();
  let stringTwo = string_1.castToString(second).normalize();
  if (stringOne.length !== stringTwo.length) {
    references_1.stringClearReferences(stringOne);
    references_1.stringClearReferences(stringTwo);
    return false;
  }
  if (isStrict) {
    const isSame = stringOne.localeCompare(stringTwo) === 0;
    references_1.stringClearReferences(stringOne);
    references_1.stringClearReferences(stringTwo);
    return isSame;
  }
  const isSame = stringOne.toLowerCase().localeCompare(stringTwo.toLowerCase()) === 0;
  references_1.stringClearReferences(stringOne);
  references_1.stringClearReferences(stringTwo);
  return isSame;
}
exports.stringIsComparable = stringIsComparable;
