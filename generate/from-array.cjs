"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFromArray = void 0;
/**
 * @category Generate
 * @name generateFromArray
 * @description Gets the random value from array.
 * @summary ```import { generateFromArray } from "@corefunc/corefunc/generate/from-array";```
 * @param {Array} [arrayFrom] Array to pick from.
 * @returns {*} Value from array.
 * @since 0.1.58
 */
function generateFromArray(arrayFrom) {
    if (!arrayFrom.length) {
        return undefined;
    }
    if (arrayFrom.length === 1) {
        return arrayFrom[0];
    }
    return arrayFrom[Math.floor(Math.random() * arrayFrom.length)];
}
exports.generateFromArray = generateFromArray;
