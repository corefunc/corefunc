/**
 * @category Check Like
 * @name checkIsErrorLike
 * @description Check is value is error-like object.
 * @summary ```import { checkIsErrorLike } from "@corefunc/corefunc/check/is-error-like";```
 * @param {*} errorLike Object to be checked.
 * @returns {boolean}
 * @since 0.3.29
 * @example Usage:
 * ```ts
 * checkIsErrorLike(new Error("Smth is wrong")) // ➜ true
 * checkIsErrorLike({ message: "Smth is wrong", name: "Error" }) // ➜ true
 * ```
 */
export declare function checkIsErrorLike(errorLike: unknown): boolean;
