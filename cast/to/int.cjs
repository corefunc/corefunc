"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToInt = void 0;
/**
 * @category Cast To
 * @name castToInt
 * @description Typecast variable to integer.
 * @param {*} value
 * @param {number} [returnOnFail=0] The return value in case of failure.
 * @param {boolean=} [isNanFail=true] Consider NaN as failed to parse value.
 * @param {boolean=} [shouldBeSafe=true] Fits integer between MIN_SAFE_INTEGER and MAX_SAFE_INTEGER.
 * @returns {number} Any number.
 */
function castToInt(value, returnOnFail = 0, isNanFail = true, shouldBeSafe = true) {
  const type = typeof value;
  if (type === "number") {
    if (Number.isFinite(value)) {
      if (!shouldBeSafe) {
        return Number.parseInt(value);
      }
      const int = Number.parseInt(value);
      if (int > Number.MAX_SAFE_INTEGER) {
        return Number.MAX_SAFE_INTEGER;
      }
      else if (int < Number.MIN_SAFE_INTEGER) {
        return Number.MIN_SAFE_INTEGER;
      }
      else {
        return int;
      }
    }
    if (Number.isNaN(value)) {
      if (isNanFail) {
        return returnOnFail;
      }
      else {
        return NaN;
      }
    }
    if (shouldBeSafe) {
      if (value === Number.POSITIVE_INFINITY) {
        return Number.MAX_SAFE_INTEGER;
      }
      else {
        return Number.MIN_SAFE_INTEGER;
      }
    }
    return value;
  }
  if (type === "string") {
    return castToInt(Number.parseInt(value), returnOnFail, isNanFail, shouldBeSafe);
  }
  if (type === "boolean") {
    return Number(value);
  }
  const casted = Number(value);
  if (Object.prototype.toString.call(value) === "[object Number]") {
    return castToInt(Number.parseInt(casted), returnOnFail, isNanFail, shouldBeSafe);
  }
  return castToInt(String(value), returnOnFail, isNanFail, shouldBeSafe);
}
exports.castToInt = castToInt;
