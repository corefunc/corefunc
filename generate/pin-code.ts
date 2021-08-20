import { generateString } from "./string";

/**
 * @category Generate
 * @description Generate random PIN code string
 * @param {number} [size]
 * @returns {string}
 */
export function generatePinCode(size: number = 4): string {
  return generateString(size, "0123456789");
}
