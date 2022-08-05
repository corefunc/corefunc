/**
 * @category Object Keys
 * @name objectKeysPick
 * @description Pick keys from object and return new plain object.
 * @summary ```import { objectKeysPick } from '@corefunc/corefunc/object/keys/pick';```
 * @param {Object} [instance] Object to be picked from.
 * @param {Array.<String>} [keys] Array of keys to pick.
 * @returns {Object} New plain object.
 */
export function objectKeysPick(instance, keys) {
  if (!keys.length || !Object.keys(instance ?? {}).length) {
    return Array.from(keys).reduce((accumulator, key) => {
      accumulator[key] = undefined;
      return accumulator;
    }, {});
  }
  return Array.from(keys).reduce((accumulator, key) => {
    accumulator[key] = instance[key];
    return accumulator;
  }, {});
}
