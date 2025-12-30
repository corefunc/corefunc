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
export declare function objectKeysPick<T extends Record<PropertyKey, any>, K extends ReadonlyArray<string>, V = T[keyof T]>(instance: T, keys: K, defineMissing: true): Partial<Record<K[number], V | undefined>>;
export declare function objectKeysPick<T extends Record<PropertyKey, any>, K extends ReadonlyArray<string>, V = T[keyof T]>(instance: T, keys: K, defineMissing?: false): Partial<Record<K[number], V>>;
