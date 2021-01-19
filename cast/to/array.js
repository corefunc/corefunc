"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const values_1 = require("../../collection/values");
/**
 * Creates a new Array instance from an array-like or iterable object
 * This has different behaviour from `Array.from`.
 * @param {*} value
 * @returns {Array}
 */
function castToArray(value) {
    return values_1.default(value);
}
exports.default = castToArray;
