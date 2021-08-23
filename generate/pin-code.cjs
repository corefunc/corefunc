"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePinCode = void 0;
const string_1 = require("./string.cjs");
const NUMBERS = "0123456789";
/**
 * @category Generate
 * @description Generate random PIN code string.
 * @param {number} [size=4] PIN code length.
 * @param {Array.<string>=} [blockList] Array of strings to exclude.
 * @returns {string} Random PIN code string.
 */
function generatePinCode(size = 4, blockList) {
  const theSize = Math.abs(~~size) || 4;
  if (!blockList || !Array.isArray(blockList) || !blockList.length) {
    return string_1.generateString(theSize, NUMBERS);
  }
  const theBlockList = Array.from(new Set(blockList))
    .filter((block) => typeof block === "string")
    .filter((block) => block.length !== theSize);
  if (!theBlockList.length) {
    return string_1.generateString(theSize, NUMBERS);
  }
  let pin;
  do {
    pin = string_1.generateString(theSize, NUMBERS);
  } while (theBlockList.includes(pin));
  return pin;
}
exports.generatePinCode = generatePinCode;
