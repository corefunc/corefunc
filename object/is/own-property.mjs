import { checkIsObjectLike } from "../../check/isObjectLike.mjs";

/**
 * @category Object Get
 * @name objectGetProperty
 * @description Whether the object has the specified own property.
 * @summary ```import { objectIsOwnProperty } from '@corefunc/corefunc/object/is/own-property';```
 * @param {Object} object Object to search in
 * @param {String} [key] Key name.
 * @returns {Boolean} Is own property.
 * @since 0.1.55
 */
export function objectIsOwnProperty(object, key) {
  if (!object) {
    return false;
  }
  if (checkIsObjectLike(object) === false) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, key);
}
