/**
 * @category Number
 * @name numberDecimalPortion
 * @description Get number decimal portion.
 * @throws {TypeError}
 * @param {Number|String} numberGetFrom
 * @param {Boolean} [removeTrailingZeros=true]
 * @returns {String}
 * @since 0.1.39
 * @example
 * ```javascript
 * numberDecimalPortion("0.000100", false); // ➜ '000100'
 * ```
 * @example
 * ```javascript
 * numberDecimalPortion("1"); // ➜ ''
 * ```
 * @example
 * ```javascript
 * numberDecimalPortion(5.123); // ➜ '123'
 * ```
 * @example
 * ```javascript
 * numberDecimalPortion(12345678.99); // ➜ '99'
 * ```
 */
export declare function numberDecimalPortion(numberGetFrom: number | string, removeTrailingZeros?: boolean): string;
