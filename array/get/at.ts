import { isArrayLike } from "../../check/isArrayLike";

/**
 * @name arrayGetAt
 * @description Get the value at the index of an array. Supports negative index.
 * @param {Array} array
 * @param {Number} index
 * @param {*=} onFail
 * @returns {*}
 * @example arrayGetAt(["🍌", "🍏", "🍇", "🍊"], -2) ⇨ "🍇"
 * @since 0.0.96
 */
export function arrayGetAt<T, E>(array: T[], index: number, onFail?: E): T | E {
  if (!isArrayLike(array) || !Number.isInteger(index)) {
    return onFail;
  }
  const relativeIndex = index >= 0 ? index : array.length + index;
  if (relativeIndex < 0 || relativeIndex >= array.length) {
    return onFail;
  }
  return array[relativeIndex];
}
