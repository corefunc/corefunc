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
export function checkIsErrorLike(errorLike: unknown): boolean {
  if (errorLike instanceof Error) {
    return true;
  }
  if (!errorLike || typeof errorLike !== "object" || Array.isArray(errorLike)) {
    return false;
  }
  return (
    "message" in errorLike &&
    typeof (errorLike as Error).message === "string" &&
    "name" in errorLike &&
    typeof (errorLike as Error).name === "string"
  );
}
