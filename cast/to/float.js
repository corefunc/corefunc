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
export function castToFloat(value, onFail = 0, toFixed) {
    const type = typeof value;
    const roundTo = (num, decimals) => {
        const factor = Math.pow(10, decimals);
        const rounded = Math.round((num + Number.EPSILON) * factor) / factor;
        return Number(rounded.toFixed(decimals));
    };
    if (type === "boolean") {
        return Number(value);
    }
    if (type === "string") {
        const temporary = Number.parseFloat(value);
        if (Number.isNaN(temporary) || !Number.isFinite(temporary)) {
            return onFail;
        }
        if (typeof toFixed === "number") {
            return roundTo(temporary, toFixed);
        }
        return temporary;
    }
    if (type === "number" && Number.isFinite(value)) {
        const numValue = value;
        if (typeof toFixed === "number") {
            return roundTo(numValue, toFixed);
        }
        return numValue;
    }
    return castToFloat(String(value), onFail, toFixed);
}
