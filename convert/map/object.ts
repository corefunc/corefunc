/**
 * @category Convert Map
 * @name convertMapToObject
 * @description Convert Map to plain object.
 * @summary ```import { convertMapToObject } from '@corefunc/corefunc/convert/map/object';```
 * @param {Map} [map] Map to convert.
 * @returns {Object} Plain object.
 */
export function convertMapToObject(map: Map<any, any>): Record<string, any> {
  if (!map || !(map instanceof Map)) {
    return {};
  }
  return Object.fromEntries(map);
}
