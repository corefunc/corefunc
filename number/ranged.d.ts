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
export declare function numberRanged(numberLike: any, defaultNumber?: number, minimalNumber?: number, maximumNumber?: number, shouldBeInteger?: boolean): number;
