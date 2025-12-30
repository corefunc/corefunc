/**
 * @category Cast To
 * @name castToFloatOrNull
 * @description Typecast variable to float or null if failed
 * @summary ```import { castToFloatOrNull } from "@corefunc/corefunc/cast/to/float-or-null";```
 * @param {*} [variable]
 * @param {Number} [toFixed=]
 * @returns {Null|Number}
 * @example castToFloatOrNull("16.5"); // => 16.5
 */
export declare function castToFloatOrNull(variable: any, toFixed?: number): null | number;
