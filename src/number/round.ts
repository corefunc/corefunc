/* eslint-disable no-restricted-properties */
/**
 * Returns the value of a number rounded to the nearest integer using precision parameter.
 * @param {Number} number
 * @param {Number} precision
 * @return {number}
 * @example round(1234.5678, 1); // 1234.6
 * @example round(1234.5678, -1); // 1230
 */
function round(number, precision) {
  const factor = Math.pow(10, precision); // WARNING! DO NOT USE (10 ** precision)!!! IT BEHAVES DIFFERENTLY!!!
  return Math.round(number * factor) / factor;
}

export default round;
