/**
 * @category Convert Number
 * @name convertNumberToJson
 * @description Convert BigInt, number or string to JSON acceptable value.
 * @summary ```import { convertNumberToJson } from '@corefunc/corefunc/convert/number/json';```
 * @param {bigint|number|string} [value] BigInt, number or string to convert.
 * @param {number|string} [onFailure=0] Value on failure.
 * @returns {number|string} Number or string.
 * @since 0.1.70
 */
export function convertNumberToJson(value: bigint | number | string, onFailure: number | string = 0): number | string {
  let num: number;
  if (typeof value === "string" || (value as any) instanceof String) {
    num = Number.parseFloat(value as string);
  } else {
    num = Number(value);
  }
  return Number.isFinite(num) ? num : onFailure;
}
