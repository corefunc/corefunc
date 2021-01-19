import { isArrayLike } from "../../check/isArrayLike.mjs";

/**
 * @name arrayGetAt
 * @param {Array} array
 * @param {Number} index
 * @param {*=} onFail
 * @returns {*}
 * @since 0.0.96
 */
export function arrayGetAt(array, index, onFail) {
  if (!isArrayLike(array) || !Number.isInteger(index)) {
    return onFail;
  }
  const relativeIndex = index >= 0 ? index : array.length + index;
  if (relativeIndex < 0 || relativeIndex >= array.length) {
    return onFail;
  }
  return array[relativeIndex];
}
