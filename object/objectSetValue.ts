import checkIsObjectLike from "../check/isObjectLike";

import isMap from "../is/map";
import isSet from "../is/set";
import isWeakMap from "../is/weakMap";
import isWeakSet from "../is/weakSet";

export default function objectSetValue<O extends object | Map<any, any> | Set<any> | WeakSet<any> | WeakMap<any, any>>(
  object: O,
  key: string,
  value: any,
): O {
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
