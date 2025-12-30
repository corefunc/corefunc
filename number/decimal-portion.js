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
 * ```js
 * numberDecimalPortion("0.000100", false); // ➜ '000100'
 * ```
 * @example
 * ```js
 * numberDecimalPortion("1"); // ➜ ''
 * ```
 * @example
 * ```js
 * numberDecimalPortion(5.123); // ➜ '123'
 * ```
 * @example
 * ```js
 * numberDecimalPortion(12345678.99); // ➜ '99'
 * ```
 */
export function numberDecimalPortion(numberGetFrom, removeTrailingZeros = true) {
    const asString = String(numberGetFrom);
    const asFloat = Number.parseFloat(asString);
    if (Number.isNaN(asFloat) || !Number.isFinite(asFloat)) {
        throw new TypeError(`The number to pad should be a valid number. [${asString}] given.`);
    }
    let decimalPortion = String(removeTrailingZeros ? asFloat : asString);
    if (decimalPortion.includes(".")) {
        decimalPortion = decimalPortion.split(".").pop() ?? "";
    }
    else {
        decimalPortion = "";
    }
    return decimalPortion;
}
