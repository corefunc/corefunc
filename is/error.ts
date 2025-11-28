/**
 * @category Is
 * @name isError
 * @description Check is value is error object.
 * @summary ```import { isError } from "@corefunc/corefunc/is/error";```
 * @param {*} error Object to be checked.
 * @returns {boolean}
 * @since 0.3.46
 */
export function isError(
  error: any,
): error is Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError {
  if (error instanceof Error) {
    return true;
  }
  return Object.prototype.toString.call(error) === "[object Error]";
}
