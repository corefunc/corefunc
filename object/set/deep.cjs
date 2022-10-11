"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSetDeep = void 0;
const is_object_like_1 = require("../../check/is-object-like.cjs");
/**
 * @category Object Set
 * @name objectSetDeep
 * @description Set object values.
 * @summary ```import { objectSetDeep } from "@corefunc/corefunc/object/set/deep";```
 * @param {Object} target
 * @param {Object} source
 * @returns {Object}
 * @since 0.3.56
 */
function objectSetDeep(target, source) {
  Object.keys(source).forEach((key) => {
    if (["__proto__", "constructor"].includes(key)) {
      return;
    }
    if (is_object_like_1.checkIsObjectLike(target[key]) && is_object_like_1.checkIsObjectLike(source[key])) {
      objectSetDeep(target[key], source[key]);
    }
    else {
      target[key] = source[key];
    }
  });
  return target;
}
exports.objectSetDeep = objectSetDeep;
