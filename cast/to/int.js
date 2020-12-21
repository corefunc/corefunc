"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.castToInt = void 0;
/**
 * Typecast variable to integer
 * @param {*}      variable
 * @param {*}      [onFail=0] The return value in case of failure
 * @param {number} [radix=10] An integer that represents the radix of the above mentioned string
 * @returns {number}
 * @example castToInt("F", 0, 16); // => 15
 */
function castToInt(variable, onFail = 0, radix = 10) {
    const type = typeof variable;
    if (type === "boolean") {
        return Number(variable);
    }
    if (type === "string") {
        const temporary = Number.parseInt(variable, radix);
        if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
            return onFail;
        }
        return temporary;
    }
    if (type === "number" && Number.isFinite(variable)) {
        return variable | 0;
    }
    return onFail;
}
exports.castToInt = castToInt;
