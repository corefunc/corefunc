import { isFalsy } from "./is-falsy.mjs";

/**
 * @category Is Valid
 * @name isTruthy
 * @description In JavaScript, there are six falsy values:
 * `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.
 * @summary ```import { isTruthy } from '@corefunc/corefunc/valid/is-truthy';```
 * @param {*} [value] Value to validate.
 * @returns {boolean}
 * @since 0.2.3
 */
export function isTruthy(value) {
  return !isFalsy(value);
}
