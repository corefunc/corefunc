/**
 * @category Check Like
 * @name checkIsArrayLike
 * @param {*} arrayLike
 * @returns {boolean}
 * @since 0.0.96
 */
export function checkIsArrayLike(arrayLike: unknown): boolean {
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
    typeof (arrayLike as unknown[]).length === "number" &&
    typeof arrayLike[Symbol.iterator] === "function"
  );
}
