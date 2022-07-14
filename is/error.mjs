/**
 * @category Is
 * @name isError
 * @description Check is value is error object.
 * @summary ```import { isError } from "@corefunc/corefunc/is/error";```
 * @param {*} error Object to be checked.
 * @returns {boolean}
 * @since 0.3.46
 */
export function isError(error) {
  if (error instanceof Error) {
    return true;
  }
  if (Object.prototype.toString.call(error) === "[object Error]") {
    return true;
  }
  return false;
}
