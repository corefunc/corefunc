import { arrayKeyFirst } from "../key/first.js";

/**
 * @name arrayGetHead
 * @param {Array} array
 * @param {*} onFail
 * @returns {*}
 * @example Usage:
 * ```ts
 * arrayGetHead([,,"🍌","🍏","🍊"]) // ➜ "🍌"
 * ```
 * @template T Type of array
 * @template E Type of default value
 */
export function arrayGetHead<T, E>(array: T[], onFail?: E): T | E {
  if (!Array.isArray(array)) {
    return onFail as E;
  }
  const first = arrayKeyFirst(array);
  if (first === null) {
    return onFail as E;
  }
  return array[first];
}
