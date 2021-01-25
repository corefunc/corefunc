import { checkIsIterable } from "./isIterable";
import { checkIsObjectLike } from "./isObjectLike";

/**
 * @name checkIsTraversable
 * @description  Checks if `value` is traversable
 * @param {*} value The value to check
 * @returns {boolean}
 * @since 0.0.1
 */
export function checkIsTraversable(value: any): boolean {
  return Boolean(Array.isArray(value) || checkIsObjectLike(value) || checkIsIterable(value));
}
