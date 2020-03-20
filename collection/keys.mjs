import checkIsKeyed from "../check/isKeyed.mjs";
import checkIsObjectLike from "../check/isObjectLike.mjs";

/**
 * Pick object property from list of names
 * @param {*} iterable
 * @returns {Array}
 */
export default function collectionKeys(iterable) {
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
