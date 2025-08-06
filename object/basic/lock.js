/**
 * @category Object Basic
 * @name objectBasicLock
 * @description Lock, freeze and seal object.
 * @summary ```import { objectBasicLock } from '@corefunc/corefunc/object/basic/lock';```
 * @param {Object} object Object to lock.
 * @returns {Object} Locked object.
 * @since 0.1.55
 */
export function objectBasicLock(object) {
  Object.freeze(object);
  Object.seal(object);
  Object.preventExtensions(object);
  return object;
}
