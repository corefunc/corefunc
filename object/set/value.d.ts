/**
 * @category Object Set
 * @name objectSetValue
 * @description Sets the value at key of object.
 * @summary ```import { objectSetValue } from '@corefunc/corefunc/object/set/value';```
 * @param {Object|Map|Set|WeakSet|WeakMap} object Object to set in.
 * @param {String} [key] Key name.
 * @param {*} [value] Value to set.
 * @returns {Object|Map|Set|WeakSet|WeakMap} Object that was modified.
 * @since 0.1.55
 */
export declare function objectSetValue<ObjectType extends Record<string, any> | Map<any, any> | Set<any> | WeakSet<any> | WeakMap<any, any>>(object: ObjectType, key: string, value: any): ObjectType;
