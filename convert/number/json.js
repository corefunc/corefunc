/**
 * @category Convert Number
 * @name convertNumberToJson
 * @description Convert BigInt, number or string to JSON acceptable value.
 * @summary ```import { convertNumberToJson } from '@corefunc/corefunc/convert/number/json';```
 * @param {bigint|number|string} [value] BigInt, number or string to convert.
 * @param {number|string} [onFailure=0] Value on failure.
 * @returns {number|string} Number or string.
 * @since 0.1.70
 */
export function convertNumberToJson(value, onFailure = 0) {
    let num;
    if (typeof value === "string" || value instanceof String) {
        num = Number.parseFloat(value);
    }
    else {
        num = Number(value);
    }
    return Number.isFinite(num) ? num : onFailure;
}
//# sourceMappingURL=json.js.map