import { castToInt } from "./int";

/**
 * @category Cast To
 * @name castToIntOrNan
 * @description Typecast variable to integer or NaN if failed.
 * @summary ```import { castToIntOrNan } from "@corefunc/corefunc/cast/to/int-or-nan";```
 * @param {*} [value]
 * @returns {number|Number.NaN}
 * @example castToIntOrNan("16.5"); // => 16
 * @since 0.3.21
 */
export function castToIntOrNan(value) {
  if (value === null || value === undefined) {
    return Number.NaN;
  }
  const integer = castToInt(value, Number.NaN, false);
  if (Number.isNaN(integer)) {
    return Number.NaN;
  }
  return integer;
}
