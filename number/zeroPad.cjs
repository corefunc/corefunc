"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberZeroPad = void 0;
/**
 * @name numberZeroPad
 * @description Pad a number with leading zeros.
 * @throws {RangeError|TypeError}
 * @param {Number|String} numberToPad
 * @param {Number} targetLength
 * @returns {String}
 * @since 0.1.39
 * @example
 * ```javascript
 * numberZeroPad("0.0001", 3); // ➜ '000.0001'
 * ```
 * @example
 * ```javascript
 * numberZeroPad("1", 2); // ➜ '01'
 * ```
 * @example
 * ```javascript
 * numberZeroPad(5.123, 4); // ➜ '0005.123'
 * ```
 * @example
 * ```javascript
 * numberZeroPad(12345678.99, 4); // ➜ '12345678.99'
 * ```
 */
function numberZeroPad(numberToPad, targetLength) {
    if (!Number.isInteger(targetLength)) {
        throw new TypeError(`The target length should be an integer. [${targetLength}] given.`);
    }
    if (targetLength < 0) {
        throw new RangeError(`Target length should not be a negative value. [${targetLength}] given.`);
    }
    const asString = String(numberToPad);
    const asInteger = Number.parseInt(asString, 10);
    if (Number.isNaN(asInteger) || !Number.isFinite(asInteger)) {
        throw new TypeError(`The number to pad should be a valid number. [${asString}] given.`);
    }
    let decimalPortion = String(Number.parseFloat(asString));
    if (decimalPortion.includes(".")) {
        decimalPortion = decimalPortion.split(".").pop();
    }
    else {
        decimalPortion = "";
    }
    let padded = String(asInteger).padStart(targetLength, "0");
    if (decimalPortion.length) {
        padded = `${padded}.${decimalPortion}`;
    }
    return padded;
}
exports.numberZeroPad = numberZeroPad;
