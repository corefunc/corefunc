/**
 * @category Object Basic
 * @name objectBasicSize
 * @description Get count of properties in object.
 * @summary ```import { objectBasicSize } from '@corefunc/corefunc/object/basic/size';```
 * @param {Object} object Object to search in.
 * @returns {Number} Count of properties.
 * @since 0.1.55
 */
export function objectBasicSize<ObjectType extends Record<string, any>>(object: ObjectType): number {
  return Object.keys(object).length;
}
