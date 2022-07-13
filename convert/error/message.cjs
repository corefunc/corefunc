"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorToMessage = void 0;
const string_1 = require("../../is/string.cjs");
/**
 * @category Convert Error
 * @name errorToMessage
 * @description Transform value to string, extracts message from error, forces error message to be string.
 * @summary ```import { errorToMessage } from "@corefunc/corefunc/convert/error/message";```
 * @param {*} error - Any value, but intended to be error.
 * @param {string=} defaultMessage - Default message.
 * @returns {string} - Error message as string.
 * @since 0.3.43
 */
function errorToMessage(error, defaultMessage) {
    switch (Object.prototype.toString.call(error)) {
        case "[object Error]":
            return String(error?.message);
        case "[object String]":
            return String(error);
        case "[object Object]":
            if (string_1.isString(error?.message)) {
                return String(error.message);
            }
    }
    if (string_1.isString(defaultMessage)) {
        return String(defaultMessage);
    }
    return String(error);
}
exports.errorToMessage = errorToMessage;
