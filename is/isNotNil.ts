/**
 * @name isNotNil
 * @description Checks if `value` is not `null` or not `undefined`.
 * @param {*} value - The value to check
 * @returns {Boolean}
 */
export function isNotNil(value: unknown): boolean {
  return value !== undefined && value !== null;
}
