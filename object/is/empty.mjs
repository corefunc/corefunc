/**
 * @category Object Is
 * @name objectIsEmpty
 * @description Checks wherever object is empty
 * @param {Object} object
 * @param {Boolean} [withNotEnumerable=false]
 * @returns {Boolean}
 * @example
 * const object = {};
 * Object.defineProperties(object, { key: { enumerable: false } });
 * objectIsEmpty(object) ➜ true
 * objectIsEmpty(object, false) ➜ true
 * objectIsEmpty(object, true) ➜ false
 * @since 0.1.45
 */
export function objectIsEmpty(object, withNotEnumerable = false) {
  if (!object || object.constructor !== Object) {
    return true;
  }
  return !(withNotEnumerable ? Object.getOwnPropertyNames(object) : Object.keys(object)).length;
}
