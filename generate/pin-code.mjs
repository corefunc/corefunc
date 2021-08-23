import { generateString } from "./string.mjs";

const NUMBERS = "0123456789";

/**
 * @category Generate
 * @description Generate random PIN code string.
 * @param {number} [size=4] PIN code length.
 * @param {Array.<string>=} [blockList] Array of strings to exclude.
 * @returns {string} Random PIN code string.
 */
export function generatePinCode(size = 4, blockList) {
  const theSize = Math.abs(~~size) || 4;
  if (!blockList || !Array.isArray(blockList) || !blockList.length) {
    return generateString(theSize, NUMBERS);
  }
  const theBlockList = Array.from(new Set(blockList))
    .filter((block) => typeof block === "string")
    .filter((block) => block.length !== theSize);
  if (!theBlockList.length) {
    return generateString(theSize, NUMBERS);
  }
  let pin;
  do {
    pin = generateString(theSize, NUMBERS);
  } while (theBlockList.includes(pin));
  return pin;
}
