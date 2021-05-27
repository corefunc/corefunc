"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsPrimitive = void 0;
/**
 * @name checkIsPrimitive
 * @description Return true on boolean, string, number, BigInt, null, Symbol and undefined
 * @param {*} value
 * @return {boolean}
 */
function checkIsPrimitive(value) {
    return Object(value) !== value;
}
exports.checkIsPrimitive = checkIsPrimitive;
