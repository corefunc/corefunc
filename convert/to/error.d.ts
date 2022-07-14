/**
 * @category Convert
 * @name convertToError
 * @description Converts anything to error.
 * @summary ```import { convertToError } from "@corefunc/corefunc/convert/to/error";```
 * @param {*} error Any value to convert to error.
 * @returns {Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError}
 * @since 0.3.47
 */
export declare function convertToError(error: any): Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError;
