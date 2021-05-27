import { checkIsObjectLike } from "../../check/is-object-like";

import { isMap } from "../../is/map";
import { isSet } from "../../is/set";
import { isWeakMap } from "../../is/weak-map";
import { isWeakSet } from "../../is/weak-set";

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
export function objectSetValue<
  ObjectType extends Record<string, any> | Map<any, any> | Set<any> | WeakSet<any> | WeakMap<any, any>
>(object: ObjectType, key: string, value: any): ObjectType {
  if (checkIsObjectLike(object) === false) {
    return object;
  }
  if (isMap(object) || isWeakMap(object)) {
    (object as Map<any, any>).set(key, value);
  }
  if (isSet(object) || isWeakSet(object)) {
    if (arguments.length > 2) {
      (object as Set<any>).add(value);
    } else {
      (object as Set<any>).add(key);
    }
  } else {
    object[key] = value;
  }
  return object;
}
