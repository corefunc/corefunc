import { checkIsArrayLike } from "../../check/is-array-like.js";

/**
 * @name arrayGetAt
 * @description Get the value at the index of an array. Supports negative index.
 * @param {Array} array
 * @param {Number} index
 * @param {*=} onFail
 * @returns {*}
 * @example arrayGetAt(["🍌", "🍏", "🍇", "🍊"], -2) ➜ "🍇"
 * @since 0.0.96
 */
export function arrayGetAt<T, E>(array: Array<T>, index: number, onFail?: E): T | E {
  if (!checkIsArrayLike(array) || !Number.isInteger(index)) {
    return onFail as E;
  }
  const relativeIndex = index >= 0 ? index : array.length + index;
  if (relativeIndex < 0 || relativeIndex >= array.length) {
    return onFail as E;
  }
  return array[relativeIndex];
}
