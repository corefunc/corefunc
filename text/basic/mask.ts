/**
 * @category Text Basic
 * @name textBasicMask
 * @description Function for masking the character.
 * @summary ```import { textBasicMask } from "@corefunc/corefunc/text/basic/mask";```
 * @param {string} text
 * @param {string} mask
 * @param {number=} [showFirst=1]
 * @param {number=} [showLast=undefined]
 * @returns {string}
 * @since 0.3.55
 */
export function textBasicMask(text: string, mask: string = "*", showFirst: number = 1, showLast?: number): string {
  const chars = Array.from(String(text));
  const maskChar = String(mask)[0] ?? "*";
  const start = showFirst - 1;
  let end = showLast === undefined ? chars.length : chars.length - showLast;
  if (start === end) {
    end = end + 2;
  }
  return chars
    .map((char: string, index: number): string => (index <= start || index >= end ? char : maskChar))
    .join("");
}
