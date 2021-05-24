"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToFloat = void 0;
/**
 * @category Cast To
 * @name castToFloat
 * @description Typecast variable to float
 * @summary ```import { castToFloat } from "@corefunc/corefunc/cast/to/float";```
 * @param {*} [value]
 * @param {*} [onFail=0] The return value in case of failure
 * @param {Number=} [toFixed]
 * @returns {Number}
 * @example castToFloat("16.5"); // => 16.5
 */
function castToFloat(value, onFail = 0, toFixed) {
    const type = typeof value;
    if (type === "boolean") {
        return Number(value);
    }
    if (type === "string") {
        const temporary = Number.parseFloat(value);
        if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
            return onFail;
        }
        if (typeof toFixed === "number") {
            return Number.parseFloat(temporary.toFixed(toFixed));
        }
        return temporary;
    }
    if (type === "number" && Number.isFinite(value)) {
        if (typeof toFixed === "number") {
            return Number.parseFloat(Number.parseFloat(value).toFixed(toFixed));
        }
        return Number.parseFloat(value);
    }
    return castToFloat(String(value), onFail, toFixed);
}
exports.castToFloat = castToFloat;
