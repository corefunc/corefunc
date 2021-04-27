"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectIsOwnProperty = void 0;
const isObjectLike_1 = require("../../check/isObjectLike.cjs");
/**
 * @category Object Get
 * @name objectGetProperty
 * @description Whether the object has the specified own property.
 * @summary ```import { objectIsOwnProperty } from '@corefunc/corefunc/object/is/own-property';```
 * @param {Object} object Object to search in
 * @param {String} [key] Key name.
 * @returns {Boolean} Is own property.
 * @since 0.1.55
 */
function objectIsOwnProperty(object, key) {
  if (!object) {
    return false;
  }
  if (isObjectLike_1.checkIsObjectLike(object) === false) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, key);
}
exports.objectIsOwnProperty = objectIsOwnProperty;
