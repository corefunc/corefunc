import { arrayKeyFirst } from "../key/first";

/**
 * @name arrayGetHead
 * @param {Array} array
 * @param {*} onFail
 * @returns {*}
 * @example ```arrayGetHead([,,"🍌","🍏","🍊"]) ➜ "🍌"```
 * @template T Type of array
 * @template E Type of default value
 */
export function arrayGetHead<T, E>(array: T[], onFail?: E): T | E {
  if (!Array.isArray(array)) {
    return onFail;
  }
  const first = arrayKeyFirst(array);
  if (first === null) {
    return onFail;
  }
  return array[first];
}
