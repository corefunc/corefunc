"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringCompare = void 0;
const string_1 = require("../cast/to/string.cjs");
const clearReferences_1 = require("./clearReferences.cjs");
/**
 * Compare two strings
 * @param {string} first
 * @param {string} second
 * @param {boolean} isStrict
 * @returns {boolean}
 */
function stringCompare(first, second, isStrict = false) {
  let stringOne = string_1.castToString(first).normalize();
  let stringTwo = string_1.castToString(second).normalize();
  if (stringOne.length !== stringTwo.length) {
    clearReferences_1.default(stringOne);
    clearReferences_1.default(stringTwo);
    return false;
  }
  if (isStrict) {
    const isSame = stringOne.localeCompare(stringTwo) === 0;
    clearReferences_1.default(stringOne);
    clearReferences_1.default(stringTwo);
    return isSame;
  }
  const isSame = stringOne.toLowerCase().localeCompare(stringTwo.toLowerCase()) === 0;
  clearReferences_1.default(stringOne);
  clearReferences_1.default(stringTwo);
  return isSame;
}
exports.stringCompare = stringCompare;
