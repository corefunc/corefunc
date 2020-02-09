import fnIsArray from "lodash-es/isArray";
import fnIsObjectLike from "lodash-es/isObjectLike";
import fnKeys from "lodash-es/keys";

import fnIsKeyed from "../is/isKeyed";

/**
 * Pick object property from list of names
 * @param {*} iterable
 * @returns {Array}
 */
function keys(iterable) {
  if (!iterable) {
    return [];
  }
  if (fnIsObjectLike(iterable) === false) {
    return [];
  }
  if (fnIsArray(iterable) || fnIsKeyed(iterable)) {
    return Array.from(iterable.keys());
  }
  return fnKeys(iterable);
}

export default keys;
