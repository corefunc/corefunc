"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsArrayLike = void 0;
/**
 * @category Check Like
 * @name checkIsArrayLike
 * @param {*} arrayLike
 * @returns {boolean}
 * @since 0.0.96
 */
function checkIsArrayLike(arrayLike) {
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
        typeof arrayLike[Symbol.iterator] === "function");
}
exports.checkIsArrayLike = checkIsArrayLike;
