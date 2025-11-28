import { checkIsIterable } from "./is-iterable.js";
import { checkIsObjectLike } from "./is-object-like.js";
/**
 * @name checkIsTraversable
 * @description  Checks if `value` is traversable
 * @param {*} value The value to check
 * @returns {boolean}
 * @since 0.0.1
 */
export function checkIsTraversable(value) {
    return Boolean(Array.isArray(value) || checkIsObjectLike(value) || checkIsIterable(value));
}
//# sourceMappingURL=is-traversable.js.map