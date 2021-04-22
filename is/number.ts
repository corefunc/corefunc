/**
 * @category Is
 * @name isNumber
 * @description Checks if a given value is number. Returns false on NaN or Infinity.
 * @param {*} value
 * @returns {Boolean}
 */
export function isNumber(value: any): boolean /* value is number */ {
  if (typeof value === "number") {
    return Number.isFinite(value);
  }
  if (Object.prototype.toString.call(value) === "[object Number]") {
    return Number.isFinite(Number(value));
  }
  return false;
}
