"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNumber = void 0;
/**
 * @category Is
 * @name isNumber
 * @description Checks if a given value is number. Returns false on NaN or Infinity.
 * @param {*} value
 * @returns {Boolean}
 */
function isNumber(value) {
    if (typeof value === "number") {
        return Number.isFinite(value);
    }
    if (Object.prototype.toString.call(value) === "[object Number]") {
        return Number.isFinite(Number(value));
    }
    return false;
}
exports.isNumber = isNumber;
