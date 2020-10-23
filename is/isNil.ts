/**
 * @name isNil
 * @description Checks if `value` is `null` or `undefined`.
 * @param {*} value - The value to check
 * @returns {Boolean}
 */
export function isNil(value: unknown): boolean {
  return value === null || value === undefined;
}
