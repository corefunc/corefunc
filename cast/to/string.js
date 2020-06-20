"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @param {*} value
 * @returns string
 */
function castToString(value) {
    if (value === null || value === undefined) {
        return "";
    }
    if (typeof value === "string") {
        return value;
    }
    const result = value.toString();
    if (result === "0" && Object.is(value, -0)) {
        return "-0";
    }
    return result;
}
exports.default = castToString;
