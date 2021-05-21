/**
 * @category Is Valid
 * @name isFalsy
 * @description In JavaScript, there are six falsy values:
 * `false`, `0`, `''`, `null`, `undefined`, and `NaN`. Everything else is truthy.
 * @summary ```import { isFalsy } from '@corefunc/corefunc/valid/is-falsy';```
 * @param {*} [value] Value to validate.
 * @returns {boolean}
 * @since 0.2.3
 */
export function isFalsy(value: any): boolean {
  return value === false || value === 0 || value === "" || value === null || value === undefined || Number.isNaN(value);
}
