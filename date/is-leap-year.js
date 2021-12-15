"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateIsLeapYear = void 0;
/**
 * @category Date
 * @name dateIsLeapYear
 * @description Find whether a year is a leap year
 * @param {Number=} year Year to check
 * @returns {Boolean} Is leap year
 * @since 0.1.37
 * @example
 * ```javascript
 * dateIsLeapYear(2000); // ➜ true
 * ```
 * @example
 * ```javascript
 * dateIsLeapYear(2001); // ➜ false
 * ```
 */
function dateIsLeapYear(year = new Date().getFullYear()) {
    return new Date(year, 1, 29).getDate() === 29;
}
exports.dateIsLeapYear = dateIsLeapYear;
