/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isObjectLike(value): boolean {
  return value != null && typeof value === "object";
}
