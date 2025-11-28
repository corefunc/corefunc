/**
 * @category Cast To
 * @name castToFloat
 * @description Typecast variable to float
 * @summary ```import { castToFloat } from "@corefunc/corefunc/cast/to/float";```
 * @param {*} [value]
 * @param {*} [onFail=0] The return value in case of failure
 * @param {Number=} [toFixed]
 * @returns {Number}
 * @example castToFloat("16.5"); // => 16.5
 */
export declare function castToFloat<OnFailType>(value: any, onFail?: OnFailType | number, toFixed?: number): OnFailType | number;
