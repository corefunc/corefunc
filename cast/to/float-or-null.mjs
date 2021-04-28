import { castToFloat } from "./float.mjs";

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
export function castToFloatOrNull(variable, toFixed) {
  if (variable === null || variable === undefined) {
    return null;
  }
  return castToFloat(variable, null, toFixed);
}
