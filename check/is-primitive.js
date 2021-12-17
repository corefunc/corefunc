"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsPrimitive = void 0;
/**
 * @category Check
 * @name checkIsPrimitive
 * @description Return true on boolean, string, number, BigInt, null, Symbol and undefined
 * @summary ```import { checkIsPrimitive } from "@corefunc/corefunc/check/is-primitive";```
 * @param {*} value
 * @returns {boolean} Returns `true` if the given `value` is a primitive type. Otherwise, returns `false`.
 */
function checkIsPrimitive(value) {
    return (typeof value !== "object" && typeof value !== "function") || value === null;
}
exports.checkIsPrimitive = checkIsPrimitive;
