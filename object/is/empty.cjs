"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectIsEmpty = void 0;
/**
 * @category Object Is
 * @name objectIsEmpty
 * @description Get type of object
 * @param {Object} object
 * @param {Boolean} [withNotEnumerable=false]
 * @returns {Boolean}
 * @example
 * const object = {};
 * Object.defineProperties(object, { key: { enumerable: false } });
 * objectIsEmpty(object) ➜ true
 * objectIsEmpty(object, false) ➜ true
 * objectIsEmpty(object, true) ➜ false
 * @since 0.1.45
 */
function objectIsEmpty(object, withNotEnumerable = false) {
  return !(withNotEnumerable ? Object.getOwnPropertyNames(object) : Object.keys(object)).length;
}
exports.objectIsEmpty = objectIsEmpty;
