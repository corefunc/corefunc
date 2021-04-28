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
export function castToFloat<OnFailType>(
  value: any,
  onFail: OnFailType | number = 0,
  toFixed?: number,
): OnFailType | number {
  const type = typeof value;
  if (type === "boolean") {
    return Number(value);
  }
  if (type === "string") {
    const temporary = Number.parseFloat(value as string);
    if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
      return onFail;
    }
    if (typeof toFixed === "number") {
      return Number.parseFloat(temporary.toFixed(toFixed));
    }
    return temporary;
  }
  if (type === "number" && Number.isFinite(value as number)) {
    if (typeof toFixed === "number") {
      return Number.parseFloat(Number.parseFloat(value as string).toFixed(toFixed));
    }
    return Number.parseFloat(value as string);
  }
  return onFail;
}
