import { checkIsObjectLike } from "../../check/is-object-like";

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
export function objectSetDeep<Target extends Record<string, any>, Source extends Record<string, any>>(
  target: Target,
  source: Source,
): Target & Source {
  Object.keys(source).forEach((key: string): void => {
    if (["__proto__", "constructor"].includes(key)) {
      return;
    }
    if (checkIsObjectLike(target[key]) && checkIsObjectLike(source[key])) {
      objectSetDeep(target[key], source[key]);
    } else {
      target[key as keyof Target & Source] = source[key];
    }
  });
  return target as Target & Source;
}
