"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionAtAny = void 0;
const isObjectLike_1 = require("../check/isObjectLike.cjs");
/**
 * @name collectionAtAny
 * @description Pick object property from list of names
 * @param {*} object
 * @param {Array} propertyNames
 * @param {*=} onFail
 * @returns {*}
 */
function collectionAtAny(object, propertyNames, onFail) {
  if (isObjectLike_1.checkIsObjectLike(object) === false) {
    return onFail;
  }
  if (Array.isArray(propertyNames) === false) {
    return onFail;
  }
  for (let name of propertyNames) {
    name = name.toLowerCase();
    if (name in object) {
      return object[name];
    }
  }
  return onFail;
}
exports.collectionAtAny = collectionAtAny;
