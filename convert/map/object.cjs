"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMapToObject = void 0;
/**
 * @category Convert Map
 * @name convertMapToObject
 * @description Convert Map to plain object.
 * @summary ```import { convertMapToObject } from '@corefunc/corefunc/convert/map/object';```
 * @param {Map} [map] Map to convert.
 * @returns {Object} Plain object.
 */
function convertMapToObject(map) {
  if (!map || !(map instanceof Map)) {
    return {};
  }
  return Object.fromEntries(map);
}
exports.convertMapToObject = convertMapToObject;
