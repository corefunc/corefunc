import { generateString } from "./string";

const NUMBERS = "0123456789" as const;

/**
 * @category Generate
 * @description Generate random PIN code string
 * @param {number} [size]
 * @param {Array.<string>=} [blockList]
 * @returns {string}
 */
export function generatePinCode(size: number = 4, blockList?: string[]): string {
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
