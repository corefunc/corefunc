"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToError = void 0;
const string_1 = require("../../cast/to/string.cjs");
const error_1 = require("../../is/error.cjs");
/**
 * @category Convert
 * @name convertToError
 * @description Converts anything to error.
 * @summary ```import { convertToError } from "@corefunc/corefunc/convert/to/error";```
 * @param {*} error Any value to convert to error.
 * @returns {Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError}
 * @since 0.3.47
 */
function convertToError(error) {
    if (error_1.isError(error)) {
        return error;
    }
    return new Error(string_1.castToString(error));
}
exports.convertToError = convertToError;
