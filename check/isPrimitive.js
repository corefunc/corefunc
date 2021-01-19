"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @name checkIsPrimitive
 * @description Return true on boolean, string, number, BigInt, null, Symbol and undefined
 * @param {*} value
 * @return {boolean}
 */
function checkIsPrimitive(value) {
    return Object(value) !== value;
}
exports.default = checkIsPrimitive;
