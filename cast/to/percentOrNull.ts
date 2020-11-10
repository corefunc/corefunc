import { castToFloat } from "./float";

/**
 * Typecast variable to float or null if failed
 * @name castToPercentOrNull
 * @param {*} variable
 * @returns {Null|Number}
 * @example castToPercentOrNull("16.501"); // => 16.50
 */
export function castToPercentOrNull(variable: unknown): null | number {
  if (variable === null || variable === undefined) {
    return null;
  }
  return castToFloat(variable, null, 2);
}
