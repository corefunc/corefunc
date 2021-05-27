/**
 * @name isArrayLike
 * @param {*} arrayLike
 * @returns {boolean}
 * @since 0.0.96
 */
export function isArrayLike(arrayLike) {
  if (!arrayLike) {
    return false;
  }
  if (Array.isArray(arrayLike)) {
    return true;
  }
  if (typeof arrayLike !== "object") {
    return false;
  }
  return (
    Object.hasOwnProperty.call(arrayLike, "length") &&
    typeof arrayLike.length === "number" &&
    typeof arrayLike[Symbol.iterator] === "function"
  );
}
