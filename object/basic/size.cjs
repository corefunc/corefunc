"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectBasicSize = void 0;
/**
 * @category Object Basic
 * @name objectBasicSize
 * @description Get count of properties in object.
 * @summary ```import { objectBasicSize } from '@corefunc/corefunc/object/basic/size';```
 * @param {Object} object Object to search in.
 * @returns {Number} Count of properties.
 * @since 0.1.55
 */
function objectBasicSize(object) {
  return Object.keys(object).length;
}
exports.objectBasicSize = objectBasicSize;
