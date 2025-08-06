/**
 * @category Check Like
 * @name checkIsErrorLike
 * @description Check is value is error-like object.
 * @summary ```import { checkIsErrorLike } from "@corefunc/corefunc/check/is-error-like";```
 * @param {*} errorLike Object to be checked.
 * @returns {boolean}
 * @since 0.3.29
 * @example ```checkIsErrorLike(new Error("Smth is wrong"))  ➜ true```
 * @example ```checkIsErrorLike({ message: "Smth is wrong", name: "Error" })  ➜ true```
 */
export function checkIsErrorLike(errorLike) {
  if (errorLike instanceof Error) {
    return true;
  }
  if (!errorLike || typeof errorLike !== "object" || Array.isArray(errorLike)) {
    return false;
  }
  if (
    "message" in errorLike &&
    typeof (errorLike).message === "string" &&
    "name" in errorLike &&
    typeof (errorLike).name === "string"
  ) {
    return true;
  }
  return false;
}
