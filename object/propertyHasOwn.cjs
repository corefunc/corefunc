"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const checkIsObjectLike = require("../check/isObjectLike.cjs");
/**
 * Whether the object has the specified property
 * @param object
 * @param propertyName
 * @return {Boolean}
 */
function propertyHasOwn(object, propertyName) {
  if (!object) {
    return false;
  }
  if (checkIsObjectLike(object) === false) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(object, `${propertyName}`);
}
exports.default = propertyHasOwn;
