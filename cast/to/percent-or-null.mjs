import { castToFloat } from "./float.mjs";

/**
 * @category Cast To
 * @name castToPercentOrNull
 * @description Typecast variable to float or null if failed
 * @summary ```import { castToPercentOrNull } from "@corefunc/corefunc/cast/to/percent-or-null";```
 * @param {*} [value]
 * @returns {Null|Number}
 * @example castToPercentOrNull("16.501"); // => 16.50
 */
export function castToPercentOrNull(value) {
  if (value === null || value === undefined) {
    return null;
  }
  return castToFloat(value, null, 2);
}
