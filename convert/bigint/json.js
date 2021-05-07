"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertBigIntToJson = void 0;
/**
 * @category Convert BigInt
 * @name convertBigIntToJson
 * @description Convert BigInt to JSON acceptable value.
 * @summary ```import { convertBigIntToJson } from '@corefunc/corefunc/convert/bigint/json';```
 * @param {BigInt} [integer] BigInt to convert.
 * @returns {number|string} Number or string.
 * @since 0.1.67
 */
function convertBigIntToJson(integer) {
    const asNumber = Number(integer);
    if (!Number.isFinite(asNumber) || asNumber > Number.MAX_SAFE_INTEGER || asNumber < Number.MIN_SAFE_INTEGER) {
        return String(integer);
    }
    return asNumber;
}
exports.convertBigIntToJson = convertBigIntToJson;
