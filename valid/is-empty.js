"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = void 0;
const is_primitive_1 = require("../check/is-primitive");
const string_1 = require("../is/string");
/**
 * @category Is Valid
 * @name isEmpty
 * @description Checks wherever object is empty
 * @summary ```import { isEmpty } from "@corefunc/corefunc/valid/is-empty";```
 * @param {*} [value] Any value.
 * @returns {Boolean}
 */
function isEmpty(value) {
    if (value === null || value === undefined) {
        return true;
    }
    if (is_primitive_1.checkIsPrimitive(value)) {
        if (string_1.isString(value)) {
            return value.length === 0;
        }
        return !value;
    }
    if (Array.isArray(value)) {
        return value.length === 0;
    }
    if (value instanceof Set) {
        return value.size === 0;
    }
    if (value instanceof Map) {
        return value.size === 0;
    }
    return Object.keys(value).length === 0;
}
exports.isEmpty = isEmpty;
