/**
 * @category Object Keys
 * @name objectKeysPick
 * @description Pick keys from object and return new plain object.
 * @summary ```import { objectKeysPick } from '@corefunc/corefunc/object/keys/pick';```
 * @param {Object} [instance] Object to be picked from.
 * @param {Array.<String>} [keys] Array of keys to pick.
 * @returns {Object} New plain object.
 */
export function objectKeysPick<
  GenericObject extends Record<number | string | symbol, Value>,
  Keys extends string[] | ReadonlyArray<string>,
  PartialObject extends Record<keyof Keys, Value | undefined>,
  Value,
>(instance: GenericObject, keys: Keys): PartialObject {
  if (!keys.length || !Object.keys(instance ?? {}).length) {
    return Array.from(keys).reduce((accumulator: PartialObject, key: string) => {
      accumulator[key] = undefined;
      return accumulator;
    }, {} as PartialObject);
  }
  return Array.from(keys).reduce((accumulator: PartialObject, key: string) => {
    accumulator[key] = instance[key];
    return accumulator;
  }, {} as PartialObject);
}
