import { checkIsErrorLike } from "../../check/is-error-like";
import { isString } from "../../is/string";

/**
 * @category Variable New
 * @description Instantiates new plain `Error`.
 * @summary ```import { newError } from "@corefunc/corefunc/var/new/error";```
 * @param {*} message - Message property. Or error itself.
 * @param {*} cause - Cause of error.
 * @param {string=} name - Overrides name. Default is 'Error'.
 * @returns {Error} - Plain `Error` instance.
 * @since 0.3.34
 */
export function newError(message: any, cause?: any, name?: string): Error {
  let causeUse: Error | undefined = undefined;
  if (cause !== undefined) {
    if (checkIsErrorLike(cause)) {
      causeUse = cause;
    } else if (isString(cause)) {
      causeUse = new Error(cause);
    } else {
      try {
        causeUse = new Error(JSON.stringify(cause));
      } catch {
        causeUse = new Error(String(cause));
      }
    }
  }
  let error: Error | undefined = undefined;
  if (isString(message)) {
    if (causeUse) {
      // @ts-ignore
      error = new Error(message, { cause: causeUse });
    } else {
      error = new Error(message);
    }
  } else if (checkIsErrorLike(message)) {
    if (causeUse) {
      // @ts-ignore
      error = new Error(message.message, { cause: causeUse });
    } else {
      error = new Error(message.message);
    }
    Object.assign(error, message);
  } else {
    let messageUse: string;
    try {
      messageUse = JSON.stringify(message);
    } catch {
      messageUse = String(message);
    }
    if (causeUse) {
      // @ts-ignore
      error = new Error(messageUse, { cause: causeUse });
    } else {
      error = new Error(messageUse);
    }
  }
  if (isString(name) && name.length > 0) {
    error.name = name;
  }
  return error;
}
