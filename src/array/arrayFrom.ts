import isArray from "../check/isArray";
import isGlobal from "../check/isGlobal";
import isObjectLike from "../check/isObjectLike";

import mapToArray from "../cast/mapToArray";
import setToArray from "../cast/setToArray";

/**
 * @description Typecast variable to array
 * @param {*} iterable
 * @returns {Array}
 */
export default function arrayFrom(iterable: any): any[] {
  if (!iterable) {
    return [];
  }
  if (isArray(iterable)) {
    return Array.from(iterable);
  }
  if (isObjectLike(iterable)) {
    if (isGlobal(iterable)) {
      return [];
    }
    if (iterable instanceof Map) {
      return mapToArray(iterable);
    }
    if (iterable instanceof Set) {
      return setToArray(iterable);
    }
    return Array.from(Object.values(iterable));
  }
  return [];
}
