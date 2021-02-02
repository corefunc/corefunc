import { checkIsKeyed } from "../check/isKeyed";
import { checkIsObjectLike } from "../check/isObjectLike";

/**
 * Pick object property from list of names
 * @param {*} iterable
 * @returns {Array}
 */
export function collectionKeys(iterable: any): any[] {
  if (!iterable) {
    return [];
  }
  if (Array.isArray(iterable) || checkIsKeyed(iterable)) {
    return Array.from(iterable.keys());
  }
  if (checkIsObjectLike(iterable) === false) {
    return [];
  }
  return Object.keys(iterable);
}
