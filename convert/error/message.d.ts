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
export declare function errorToMessage(error: any, defaultMessage?: string): string;
