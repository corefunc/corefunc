/**
 * @category Object Keys
 * @name objectKeysOrder
 * @description Order keys if can and return new object instance.
 * @summary ```import { objectKeysOrder } from "@corefunc/corefunc/object/keys/order";```
 * @param {Object} instance Object to be ordered.
 * @param {Array.<String>=} [keys=[]] Array of keys to order.
 * @param {Boolean=} [alphabetize=false] Alphabetize rest of keys.
 * @returns {Object} New object with ordered keys.
 */
export declare function objectKeysOrder<ObjectType extends object>(instance: ObjectType, keys?: string[], alphabetize?: boolean): ObjectType;
