/**
 * Returns the value of a number rounded to the nearest integer using precision parameter.
 * @param {Number} value
 * @param {Number} precision
 * @return {number}
 * @example numberRound(1234.5678, 1); // 1234.6
 * @example numberRound(1234.5678, -1); // 1230
 */
export function numberRound(value: number, precision: number): number {
  const factor = Math.pow(10, precision); // WARNING! DO NOT USE (10 ** precision)!!! IT BEHAVES DIFFERENTLY!!!
  return Math.round(value * factor) / factor;
}
