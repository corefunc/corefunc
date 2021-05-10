/**
 * @category Text Fit
 * @name textFitLength
 * @description Trim and fit text to length
 * @summary ```import { textFitLength } from '@corefunc/corefunc/text/fit/length';```
 * @param {string} [text] Text to fit.
 * @param {number} [length=99] Length in character count, not string length.
 * @param {boolean} [addEllipsis=true] Add ellipsis if text was cut.
 * @returns {string} New text.
 * @example ```textFitLength("Hello, world!", 6) ➜ "Hello…"```
 * @since 0.1.69
 */
export function textFitLength(text: string, length: number = 99, addEllipsis: boolean = true): string {
  if (length < 1) {
    return "";
  }
  let chars = Array.from(String(text).normalize().trim());
  if (chars.length === 0) {
    return "";
  }
  if (chars.length <= length) {
    return chars.join("");
  }
  if (addEllipsis) {
    chars = chars.slice(0, length - 1);
    chars.push("…");
  } else {
    chars = chars.slice(0, length);
  }
  return chars.join("");
}
