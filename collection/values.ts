import fnValues from "lodash-es/values";

import fnIsMapType from "../is/isMapType";
import fnIsSetType from "../is/isSetType";

/**
 * @param {Arguments|Array|Map|Object|Set|WeakMap|WeakSet} iterable
 * @return {Array}
 */
function values(iterable) {
  if (Array.isArray(iterable)) {
    return iterable;
  }
  if (fnIsMapType(iterable)) {
    return Array.from(iterable.values());
  }
  if (fnIsSetType(iterable)) {
    return Array.from(iterable.values());
  }
  return fnValues(iterable);
}

export default values;
