/* eslint-disable no-bitwise */
/**
 * Typecast variable to float
 * @param {*} variable
 * @param {*} [onFail=0] The return value in case of failure
 * @returns {Number}
 * @example toFloat("16.5"); // => 16.5
 */
function toFloat(variable, onFail = 0) {
  const type = typeof variable;
  if (type === "boolean") {
    return Number(variable);
  }
  if (type === "string") {
    const temporary = Number.parseFloat(variable);
    return Number.isNaN(temporary) || !Number.isFinite(temporary) ? onFail : temporary;
  }
  if (type === "number" && Number.isFinite(variable)) {
    return Number.parseFloat(variable);
  }
  return onFail;
}

export default toFloat;
