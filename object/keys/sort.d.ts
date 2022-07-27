/**
 * @category Object Keys
 * @name objectKeysSort
 * @description Sort keys if can and return new object instance.
 * @summary ```import { objectKeysSort } from "@corefunc/corefunc/object/keys/sort";```
 * @param {Object} objectLike Object to be sorted.
 * @param {Boolean=} [isDeep=true] Deep sort.
 * @param {Number=} [depth=8] Depth.
 * @returns {Object} New object with sorted keys.
 */
export declare function objectKeysSort<ObjectType extends Record<number | string | symbol, unknown>>(objectLike: ObjectType, isDeep?: boolean, depth?: number): ObjectType;
