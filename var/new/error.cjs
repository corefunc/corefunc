"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newError = void 0;
const is_error_like_1 = require("../../check/is-error-like.cjs");
const string_1 = require("../../is/string.cjs");
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
function newError(message, cause, name) {
  let causeUse = undefined;
  if (cause !== undefined) {
    if (is_error_like_1.checkIsErrorLike(cause)) {
      causeUse = cause;
    }
    else if (string_1.isString(cause)) {
      causeUse = new Error(cause);
    }
    else {
      try {
        causeUse = new Error(JSON.stringify(cause));
      }
      catch {
        causeUse = new Error(String(cause));
      }
    }
  }
  let error = undefined;
  if (string_1.isString(message)) {
    if (causeUse) {
      // @ts-ignore
      error = new Error(message, { cause: causeUse });
    }
    else {
      error = new Error(message);
    }
  }
  else if (is_error_like_1.checkIsErrorLike(message)) {
    if (causeUse) {
      // @ts-ignore
      error = new Error(message.message, { cause: causeUse });
    }
    else {
      error = new Error(message.message);
    }
    Object.assign(error, message);
  }
  else {
    let messageUse;
    try {
      messageUse = JSON.stringify(message);
    }
    catch {
      messageUse = String(message);
    }
    if (causeUse) {
      // @ts-ignore
      error = new Error(messageUse, { cause: causeUse });
    }
    else {
      error = new Error(messageUse);
    }
  }
  if (string_1.isString(name) && name.length > 0) {
    error.name = name;
  }
  return error;
}
exports.newError = newError;
