/**
 * @category Object Keys
 * @name objectKeysPick
 * @description Pick keys from object and return new plain object.
 * @summary ```import { objectKeysSort } from "@corefunc/corefunc/object/keys/pick";```
 * @param {Object} instance Object to be picked from.
 * @param {Array.<String>} [keys] Array of keys to pick.
 * @returns {Object} New plain object.
 */
export function objectKeysPick<ObjectType extends object, KeyType extends keyof ObjectType>(
  instance: ObjectType,
  keys: KeyType[],
): Partial<ObjectType> {
  if (!keys.length || !Object.keys(instance).length) {
    return {};
  }
  return keys.reduce((accumulator: ObjectType, key: KeyType) => {
    accumulator[key] = instance[key];
    return accumulator;
  }, {}) as Partial<ObjectType>;
}
