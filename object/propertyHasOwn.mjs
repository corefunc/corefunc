import { checkIsObjectLike } from "../check/isObjectLike.mjs";

/**
 * Whether the object has the specified property
 * @param object
 * @param propertyName
 * @return {Boolean}
 */
export function propertyHasOwn(object, propertyName) {
  if (!object) {
    return false;
  }
  if (checkIsObjectLike(object) === false) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, `${propertyName}`);
}
