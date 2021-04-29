"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isString = void 0;
/**
 * @category Is
 * @name isString
 * @description Checks if a given value is a real string.
 * @summary ```import { isString } from "@corefunc/corefunc/is/string";```
 * @param {*} [value] Any value.
 * @returns {Boolean}
 */
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
exports.isString = isString;
