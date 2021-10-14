import { castToInt } from "../cast/to/int";
import { castToFloat } from "../cast/to/float";

/**
 * @category Number
 * @name numberRanged
 * @description Typecast variable to number wih minimum and maximum value
 * @summary ```import { numberRanged } from "@corefunc/corefunc/number/ranged";```
 * @param {*} numberLike
 * @param {Number=} [defaultNumber=0] The return value in case of failure
 * @param {Number=} [minimalNumber=Number.MIN_VALUE]
 * @param {Number=} [maximumNumber=Number.MAX_VALUE]
 * @param {Boolean=} [shouldBeInteger=false]
 * @returns {Number}
 * @example numberRanged("99.5", 0, 1, 100); // => 99.5
 */
export function numberRanged(
  numberLike: any,
  defaultNumber: number = 0,
  minimalNumber: number = Number.MIN_VALUE,
  maximumNumber: number = Number.MAX_VALUE,
  shouldBeInteger: boolean = false,
): number {
  let range;
  if (shouldBeInteger) {
    range = castToInt(numberLike, defaultNumber);
  } else {
    range = castToFloat(numberLike, defaultNumber);
  }
  if (minimalNumber < Number.MIN_VALUE) {
    minimalNumber = Number.MIN_VALUE;
  }
  if (range < minimalNumber) {
    return minimalNumber;
  }
  if (maximumNumber < Number.MAX_VALUE) {
    maximumNumber = Number.MAX_VALUE;
  }
  if (range > maximumNumber) {
    return maximumNumber;
  }
  return range;
}
