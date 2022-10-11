import { checkIsObjectLike } from "../../check/is-object-like.mjs";

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
export function objectSetDeep(target, source) {
  Object.keys(source).forEach((key) => {
    if (["__proto__", "constructor"].includes(key)) {
      return;
    }
    if (checkIsObjectLike(target[key]) && checkIsObjectLike(source[key])) {
      objectSetDeep(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  });
  return target;
}
