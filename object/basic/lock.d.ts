/**
 * @category Object Basic
 * @name objectBasicLock
 * @description Lock, freeze and seal object.
 * @summary ```import { objectBasicLock } from '@corefunc/corefunc/object/basic/lock';```
 * @param {Object} object Object to lock.
 * @returns {Object} Locked object.
 * @since 0.1.55
 */
export declare function objectBasicLock<ObjectType extends Record<string, any>>(object: ObjectType): ObjectType;
