/**
 * @category Is Valid
 * @name isObjectId
 * @description Check is value ObjectId
 * @param {*} value
 * @returns {Boolean}
 * @since 0.0.94
 */
export function isObjectId(value) {
  return typeof value === "string" && /^[0-9a-fA-F]{24}$/.test(value);
}
