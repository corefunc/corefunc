/**
 * @category Object Basic
 * @name objectBasicDeCycle
 * @description De-cycle object.
 * @summary ```import { objectBasicDeCycle } from '@corefunc/corefunc/object/basic/de-cycle';```
 * @param {Object} object Object to de-cycle.
 * @param {String=} _path Path ot property to de-cycle.
 * @returns {Object} De-cycled object.
 * @since 0.1.55
 */
export declare function objectBasicDeCycle<ObjectType extends Record<string, any> | any[]>(object: ObjectType, _path?: string): ObjectType;
