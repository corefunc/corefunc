/**
 * @name generateInteger
 * @category Generate
 * @description Generate random integer.
 * @summary ```import { generateInteger } from '@corefunc/corefunc/generate/integer';```
 * @param {number=} [min=0] Number to generate from
 * @param {number=} [max=Number.MAX_SAFE_INTEGER] Number to generate until
 * @returns {number}
 * @throws {RangeError}
 * @since 0.3.67
 */
export function generateInteger(min = 0, max = Number.MAX_SAFE_INTEGER) {
  if (min < Number.MIN_SAFE_INTEGER) {
    throw new RangeError('Min value is less than Number.MIN_SAFE_INTEGER.');
  }
  if(max > Number.MAX_SAFE_INTEGER) {
    throw new RangeError('Max value is greater than Number.MAX_SAFE_INTEGER.');
  }
  if (min > max) {
    throw new RangeError('Min value is greater than max value.');
  }
  if (!Number.isInteger(min)) {
    throw new RangeError('Min value is not an integer.');
  }
  if (!Number.isInteger(max)) {
    throw new RangeError('Max value is not an integer.');
  }
  if (min === max) {
    return min;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
