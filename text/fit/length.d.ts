/**
 * @category Text Fit
 * @name textFitLength
 * @description Trim and fit text to length
 * @summary ```import { textFitLength } from '@corefunc/corefunc/text/fit/length';```
 * @param {string} [text] Text to fit.
 * @param {number} [length=99] Length in character count, not string length.
 * @param {boolean} [addEllipsis=true] Add ellipsis if text was cut.
 * @returns {string} New text.
 * @example Usage:
 * ```ts
 * textFitLength("Hello, world!", 6) // ➜ "Hello…"
 * ```
 * @since 0.1.69
 */
export declare function textFitLength(text: string, length?: number, addEllipsis?: boolean): string;
