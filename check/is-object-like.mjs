/**
 * @category Check Like
 * @name checkIsObjectLike
 * @description Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`
 * @example checkIsObjectLike({}); ➜ true
 * @example checkIsObjectLike([1, 2, 3]); ➜ true
 * @example checkIsObjectLike(() => {}); ➜ false
 * @example checkIsObjectLike(null); ➜ false
 * @since 0.0.1
 */
export function checkIsObjectLike(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}
