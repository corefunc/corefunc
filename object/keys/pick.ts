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
export function objectKeysPick<
  GenericObject extends Record<number | string | symbol, Value>,
  Keys extends string[] | ReadonlyArray<string>,
  PartialObject extends Record<keyof Keys, Value | undefined>,
  Value,
  DefineMissing extends boolean = false,
>(
  instance: GenericObject,
  keys: Keys,
  defineMissing: DefineMissing,
): DefineMissing extends true ? Partial<PartialObject> : PartialObject {
  if (!keys.length || !Object.keys(instance ?? {}).length) {
    if (defineMissing) {
      return Array.from(keys).reduce((accumulator: PartialObject, key: string) => {
        accumulator[key] = undefined;
        return accumulator;
      }, {} as PartialObject);
    } else {
      return {} as PartialObject;
    }
  }
  return Array.from(keys).reduce((accumulator: PartialObject, key: string) => {
    accumulator[key] = instance[key];
    return accumulator;
  }, {} as PartialObject);
}
