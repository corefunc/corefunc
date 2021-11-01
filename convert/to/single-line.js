"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToSingleLine = void 0;
const string_1 = require("../../cast/to/string");
const is_object_like_1 = require("../../check/is-object-like");
const is_primitive_1 = require("../../check/is-primitive");
const string_2 = require("../error/string");
const string_3 = require("../../is/string");
const multiline_1 = require("../../regex/is/multiline");
function stringToSingleLine(record) {
    if (multiline_1.regexIsMultiline(record)) {
        record = record.replace(/\r?\n/g, " ");
    }
    record = record.trim();
    if (!record.endsWith(".")) {
        record = `${record}.`;
    }
    return record;
}
function primitiveToSingleLine(record) {
    if (string_3.isString(record)) {
        return stringToSingleLine(record);
    }
    if (record === undefined) {
        return stringToSingleLine("undefined");
    }
    if (record === null) {
        return stringToSingleLine("null");
    }
    return stringToSingleLine(string_1.castToString(record));
}
function arrayToSingleLine(record) {
    return record.map((value) => convertAnyToSingleLine(value)).join(" ");
}
function objectToSingleLine(record) {
    if (record instanceof Error) {
        return string_2.convertErrorToString(record);
    }
    const keys = Object.keys(record);
    let output = "";
    keys.forEach((key) => {
        output = `${output}${key}: ${convertAnyToSingleLine(record[key])}`;
        if (!output.endsWith(" ")) {
            output = `${output} `;
        }
    });
    return output;
}
function convertAnyToSingleLine(record) {
    if (is_primitive_1.checkIsPrimitive(record)) {
        return primitiveToSingleLine(record);
    }
    if (Array.isArray(record)) {
        return arrayToSingleLine(record);
    }
    if (is_object_like_1.checkIsObjectLike(record)) {
        return objectToSingleLine(record);
    }
    return stringToSingleLine(String(record));
}
/**
 * @name convertToSingleLine
 * @category Convert To
 * @description Convert any value to single line string.
 * @summary ```import { convertToSingleLine } from "@corefunc/corefunc/convert/to/single-line";```
 * @param {*} record Any plain value
 * @returns {string} Single line string
 * @since 0.3.10
 */
function convertToSingleLine(record) {
    return convertAnyToSingleLine(record);
}
exports.convertToSingleLine = convertToSingleLine;
