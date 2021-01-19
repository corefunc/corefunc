import { castToInt } from "../cast/to/int";
import { castToFloat } from "../cast/to/float";

/**
 * Typecast variable to number wih minimum and maximum value
 * @param {*} variable
 * @param {Number} [onFail=0] The return value in case of failure
 * @param {Number} numMin [Number.MIN_VALUE]
 * @param {Number} numMax [Number.MAX_VALUE]
 * @param {Boolean=false} isInteger
 * @returns {Number}
 * @example numberRanged("99.5", 0, 1, 100); // => 99.5
 */
export default function numberRanged<T>(
  variable: any,
  onFail: T,
  numMin: number = Number.MIN_VALUE,
  numMax: number = Number.MAX_VALUE,
  isInteger: boolean = false,
): T | number {
  let range;
  if (isInteger) {
    range = castToInt(variable, onFail);
  } else {
    range = castToFloat(variable, onFail);
  }
  if (range < numMin) {
    return numMin;
  }
  if (range > numMax) {
    return numMax;
  }
  return range;
}
