import { checkIsObjectLike } from "../check/isObjectLike.mjs";

import isMap from "../is/map.mjs";
import isSet from "../is/set.mjs";
import isWeakMap from "../is/weakMap.mjs";
import isWeakSet from "../is/weakSet.mjs";

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
