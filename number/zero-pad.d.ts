/**
 * @category Number
 * @name numberZeroPad
 * @description Pad a number with leading zeros and zeroes after the decimal point.
 * @summary ```import { numberZeroPad } from "@corefunc/corefunc/number/zero-pad";```
 * @throws {RangeError|TypeError}
 * @param {Number|String=} [numberToPad=0]
 * @param {Number=} [leadingLength=0]
 * @param {Number=} decimalLength
 * @returns {String}
 * @since 0.1.39
 * @example
 * ```javascript
 * numberZeroPad("0.0001", 3); // ➜ '000.0001'
 * ```
 * @example
 * ```javascript
 * numberZeroPad("1", 3, 2); // ➜ '001.00'
 * ```
 * @example
 * ```javascript
 * numberZeroPad(5.123, 4); // ➜ '0005.123'
 * ```
 * @example
 * ```javascript
 * numberZeroPad(1234567.89, 4, 3); // ➜ '1234567.890'
 * ```
 */
export declare function numberZeroPad(numberToPad?: number | string, leadingLength?: number, decimalLength?: number): string;
