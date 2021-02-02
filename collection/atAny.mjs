import { checkIsObjectLike } from "../check/isObjectLike.mjs";

/**
 * @name collectionAtAny
 * @description Pick object property from list of names
 * @param {*} object
 * @param {Array} propertyNames
 * @param {*=} onFail
 * @returns {*}
 */
export function collectionAtAny(object, propertyNames, onFail) {
  if (checkIsObjectLike(object) === false) {
    return onFail;
  }
  if (Array.isArray(propertyNames) === false) {
    return onFail;
  }
  for (let name of propertyNames) {
    name = name.toLowerCase();
    if (name in object) {
      return object[name];
    }
  }
  return onFail;
}
