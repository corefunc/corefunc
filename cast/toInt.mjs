/**
 * Typecast variable to integer
 * @param {*}      variable
 * @param {*}      [onFail=0] The return value in case of failure
 * @param {Number} [radix=10] An integer that represents the radix of the above mentioned string
 * @returns {Number}
 * @example castToInt("F", 0, 16); // => 15
 */
export default function castToInt(variable, onFail = 0, radix = 10) {
  const type = typeof variable;
  if (type === "boolean") {
    return Number(variable);
  }
  if (type === "string") {
    const temporary = Number.parseInt(variable, radix);
    if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
      return onFail;
    }
    return temporary;
  }
  if (type === "number" && Number.isFinite(variable)) {
    return variable | 0;
  }
  return onFail;
}
