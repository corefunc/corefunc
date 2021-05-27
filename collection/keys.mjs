import { checkIsKeyed } from "../check/is-keyed.mjs";
import { checkIsObjectLike } from "../check/is-object-like.mjs";

/**
 * Pick object property from list of names
 * @param {*} iterable
 * @returns {Array}
 */
export function collectionKeys(iterable) {
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
