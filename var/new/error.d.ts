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
export declare function newError(message: any, cause?: any, name?: string): Error;
