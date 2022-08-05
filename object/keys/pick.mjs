/**
 * @category Object Keys
 * @name objectKeysPick
 * @description Pick keys from object and return new plain object.
 * @summary ```import { objectKeysPick } from '@corefunc/corefunc/object/keys/pick';```
 * @param {Object} [instance] Object to be picked from.
 * @param {Array.<String>} [keys] Array of keys to pick.
 * @param {boolean=} [defineMissing=false] Fill missing values with `undefined`.
 * @returns {Object} New plain object.
 */
export function objectKeysPick(instance, keys, defineMissing) {
  if (!keys.length || !Object.keys(instance ?? {}).length) {
    if (defineMissing) {
      return Array.from(keys).reduce((accumulator, key) => {
        accumulator[key] = undefined;
        return accumulator;
      }, {});
    } else {
      return {};
    }
  }
  return Array.from(keys).reduce((accumulator, key) => {
    accumulator[key] = instance[key];
    return accumulator;
  }, {});
}
