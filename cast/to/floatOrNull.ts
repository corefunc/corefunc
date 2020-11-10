import { castToFloat } from "./float";

/**
 * Typecast variable to float or null if failed
 * @name castToFloatOrNull
 * @param {*} variable
 * @param {number} [toFixed=]
 * @returns {Null|Number}
 * @example castToFloatOrNull("16.5"); // => 16.5
 */
export function castToFloatOrNull(variable: unknown, toFixed?: number): null | number {
  if (variable === null || variable === undefined) {
    return null;
  }
  return castToFloat(variable, null, toFixed);
}
