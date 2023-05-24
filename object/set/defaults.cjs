"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSetDefaults = void 0;
const is_object_like_1 = require("../../check/is-object-like.cjs");
/**
 * @category Object Set
 * @name objectSetDefaults
 * @param {Object} destination
 * @param {Object} source
 * @param {{ arrayMergeToUnique?: boolean; nullAsUndefined?: boolean; objectDeepMerge?: boolean }} [options]
 * @returns {Object}
 * @example objectSetDefaults({}, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: undefined }, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: null }, { val: true }) // { val: null }
 * @example objectSetDefaults({ val: "text" }, { val: true }) // { val: "text" }
 */
function objectSetDefaults(destination, source, options = {
  arrayMergeToUnique: false,
  nullAsUndefined: false,
  objectDeepMerge: false,
}) {
  if (!is_object_like_1.checkIsObjectLike(destination)) {
    return objectSetDefaults({}, source);
  }
  if (!is_object_like_1.checkIsObjectLike(source)) {
    return objectSetDefaults(destination, {});
  }
  const obj = Object.assign(Object.create(Object.getPrototypeOf(destination)));
  Array.from(new Set([...Object.keys(destination), ...Object.keys(source)]))
    .filter((key) => !["__proto__", "constructor"].includes(key))
    .sort((alpha, beta) => alpha.localeCompare(beta))
    .forEach(function (key) {
      const valDest = destination[key];
      const valSrc = source[key];
      obj[key] = undefined;
      if (valDest === undefined && valSrc === undefined) {
        return;
      }
      if (options.nullAsUndefined && valDest === null && valSrc === null) {
        return;
      }
      if (is_object_like_1.checkIsObjectLike(valSrc) && is_object_like_1.checkIsObjectLike(valDest)) {
        if (options.objectDeepMerge) {
          obj[key] = objectSetDefaults(valDest, valSrc, options);
        }
        else {
          obj[key] = valSrc;
        }
      }
      else if (Array.isArray(valDest) && Array.isArray(valSrc)) {
        if (options.arrayMergeToUnique) {
          obj[key] = Array.from(new Set([...valDest, ...valSrc])).sort();
        }
        else {
          obj[key] = valSrc;
        }
      }
      else {
        if (options.nullAsUndefined) {
          if (valSrc === null) {
            obj[key] = valDest;
          }
          else {
            obj[key] = valSrc;
          }
        }
        else {
          if (valSrc === undefined) {
            obj[key] = valDest;
          }
          else {
            obj[key] = valSrc;
          }
        }
      }
    });
  return obj;
}
exports.objectSetDefaults = objectSetDefaults;
