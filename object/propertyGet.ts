import fnCloneDeep from "lodash-es/cloneDeep";
import fnHasIn from "lodash-es/hasIn";
import fnIsObject from "lodash-es/isObject";

/**
 * Get nested property
 * @param {Object} object
 * @param {Array|String} path
 * @param {*} [onFail=undefined]
 * @returns {*}
 */
export default function propertyGet(object, path, onFail?) {
  if (!object) {
    return onFail;
  }
  if (fnIsObject(object) === false) {
    return onFail;
  }
  const parts = Array.isArray(path) ? path : `${path}`.split(".");
  let haystack = fnCloneDeep(object);
  for (let index = 0, length = parts.length; index < length; index++) {
    const part = parts[index];
    if (!fnHasIn(haystack, part)) {
      return onFail;
    }
    haystack = haystack[part];
  }
  return haystack;
}
