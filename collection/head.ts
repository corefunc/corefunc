import fnCloneDeep from "lodash-es/cloneDeep";
import fnHead from "lodash-es/head";
import fnIsArray from "lodash-es/isArray";
import fnKeys from "lodash-es/keys";
import fnSortBy from "lodash-es/sortBy";

import fnIsMapType from "../is/isMapType";
import fnIsSetType from "../is/isSetType";
import fnIsTraversable from "../is/isTraversable";

/**
 * Gets the first element of traversable variable
 * @param {Arguments|Array|Map|Object|Set|WeakMap|WeakSet} iterable
 * @param {Boolean=true} clone
 * @param {*=} defaultValue
 * @return {*}
 * @example head(null) ➜ undefined
 * @example head(null, 0) ➜ 0
 * @example head([], 0) ➜ 0
 * @example head([], new Error("Array should not be empty!"))
 * @example head([0, 1, 2]) ➜ 0
 * @example head({b: 1, a: 2,}) ➜ 2
 * @example head(new Set([1, 2, 3])) ➜ 1
 * @example head(new Map([["b", 1], ["a", 2]]))  ➜ 2
 */
function head(iterable, clone = true, defaultValue = undefined) {
  if (!iterable) {
    return defaultValue;
  }
  if (!fnIsTraversable(iterable)) {
    return fnCloneDeep(defaultValue);
  }
  if (fnIsArray(iterable)) {
    if (iterable.length === 0) {
      return defaultValue;
    }
    if (clone) {
      return fnCloneDeep(fnHead(iterable));
    } else {
      return fnHead(iterable);
    }
  }
  if (fnIsSetType(iterable)) {
    const values = Array.from(iterable.values());
    if (values.length === 0) {
      return defaultValue;
    }
    if (clone) {
      return fnCloneDeep(fnHead(values));
    } else {
      return fnHead(values);
    }
  }
  if (fnIsMapType(iterable)) {
    const keys = fnSortBy(Array.from(iterable.keys()));
    if (keys.length === 0) {
      return defaultValue;
    }
    if (clone) {
      return fnCloneDeep(iterable.get(fnHead(keys)));
    } else {
      return iterable.get(fnHead(keys));
    }
  }
  const keys = fnSortBy(fnKeys(iterable));
  if (keys.length === 0) {
    return defaultValue;
  }
  if (clone) {
    return fnCloneDeep(iterable[keys[0]]);
  } else {
    return iterable[keys[0]];
  }
}

export default head;
