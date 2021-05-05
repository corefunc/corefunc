import { castToInt } from "./int.mjs";

/**
 * @category Cast To
 * @name castToIntOrNull
 * @description Typecast variable to integer or null if failed.
 * @summary ```import { castToIntOrNull } from "@corefunc/corefunc/cast/to/int-or-null";```
 * @param {*} [value]
 * @returns {Null|Number}
 * @example castToIntOrNull("16.5"); // => 16
 */
export function castToIntOrNull(value) {
  if (value === null || value === undefined) {
    return null;
  }
  return castToInt(value, null);
}
