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
export declare function objectKeysPick<T extends Record<PropertyKey, V>, K extends ReadonlyArray<string>, V = T[keyof T], D extends boolean = false>(instance: T, keys: K, defineMissing?: D): D extends true ? Partial<Record<K[number], V | undefined>> : Partial<Record<K[number], V>>;
