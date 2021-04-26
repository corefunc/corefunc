/**
 * @category Object Values
 * @name objectValues
 * @description Gets object values.
 * @summary ```import { objectValues } from '@corefunc/corefunc/object/values/values';```
 * @param {Object} object Object to search in
 * @returns {Array} Array with values.
 */
export function objectValues<ObjectType extends Record<string, any>>(object: ObjectType): any[] {
  if (!object) {
    return [];
  }
  return Object.values(object);
}
