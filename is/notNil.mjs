/**
 * @category Is
 * @name isNotNil
 * @description Checks if `value` is not `null` or not `undefined`.
 * @param {*} value - The value to check
 * @returns {Boolean}
 */
export function isNotNil(value) {
  return value !== undefined && value !== null;
}
