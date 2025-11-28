/**
 * @category Check Like
 * @name checkIsArrayLike
 * @param {*} arrayLike
 * @returns {boolean}
 * @since 0.0.96
 */
export function checkIsArrayLike(arrayLike) {
    if (!arrayLike) {
        return false;
    }
    if (Array.isArray(arrayLike)) {
        return true;
    }
    if (typeof arrayLike !== "object") {
        return false;
    }
    return (Object.hasOwnProperty.call(arrayLike, "length") &&
        typeof arrayLike.length === "number" &&
        // @ts-expect-error Property may not be defined on any type
        typeof arrayLike[Symbol.iterator] === "function");
}
//# sourceMappingURL=is-array-like.js.map