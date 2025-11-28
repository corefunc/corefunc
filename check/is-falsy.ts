/**
 * @name checkIsFalsy
 * @description Determine whether a value represents a falsy semantic value (false, 0, or common string equivalents).
 * @param {*} value The value to evaluate.
 * @returns {boolean} True if the value is considered falsy; otherwise, false.
 */
export function checkIsFalsy(value: any): boolean {
  if (value === false || value === 0) {
    return true;
  }
  return typeof value === "string" && value.search(/^(?:no|n|false|f|off|0)$/i) !== -1;
}
