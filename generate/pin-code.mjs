import { generateString } from "./string.mjs";

/**
 * @category Generate
 * @description Generate random PIN code string
 * @param {number} [size]
 * @returns {string}
 */
export function generatePinCode(size = 4) {
  return generateString(size, "0123456789");
}
