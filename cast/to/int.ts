/**
 * @category Cast To
 * @name castToInt
 * @description Typecast variable to integer
 * @param {*} value
 * @param {*} [onFail=0] The return value in case of failure
 * @param {Number} [radix=10] An integer that represents the radix of the above mentioned string
 * @returns {Number} Any number excluding NaN and Infinity
 * @example
 * ```javascript
 * castToInt("F", 0, 16); // => 15
 * ```
 */
export function castToInt<D>(value, onFail: D | number = 0, radix: number = 10): D | number {
  const type = typeof value;
  if (type === "boolean") {
    return Number(value);
  }
  if (type === "string") {
    const temporary = Number.parseInt(value, radix);
    if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
      return onFail;
    }
    return temporary;
  }
  if (type === "number" && Number.isFinite(value)) {
    return value | 0;
  }
  const casted = Number(value);
  if (Object.prototype.toString.call(value) === "[object Number]" && Number.isFinite(casted)) {
    return casted | 0;
  }
  return castToInt(String(value), onFail, radix);
}
