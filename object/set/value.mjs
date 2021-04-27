import { checkIsObjectLike } from "../../check/isObjectLike.mjs";

import { isMap } from "../../is/map.mjs";
import { isSet } from "../../is/set.mjs";
import { isWeakMap } from "../../is/weakMap.mjs";
import { isWeakSet } from "../../is/weakSet.mjs";

/**
 * @category Object Set
 * @name objectSetValue
 * @description Sets the value at key of object.
 * @summary ```import { objectSetValue } from '@corefunc/corefunc/object/set/value';```
 * @param {Object|Map|Set|WeakSet|WeakMap} object Object to set in.
 * @param {String} [key] Key name.
 * @param {*} [value] Value to set.
 * @returns {Object|Map|Set|WeakSet|WeakMap} Object that was modified.
 * @since 0.1.55
 */
export function objectSetValue(object, key, value) {
  if (checkIsObjectLike(object) === false) {
    return object;
  }
  if (isMap(object) || isWeakMap(object)) {
    object.set(key, value);
  }
  if (isSet(object) || isWeakSet(object)) {
    if (arguments.length > 2) {
      object.add(value);
    } else {
      object.add(key);
    }
  } else {
    object[key] = value;
  }
  return object;
}
