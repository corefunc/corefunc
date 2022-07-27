"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectKeysSort = void 0;
/**
 * @category Object Keys
 * @name objectKeysSort
 * @description Sort keys if can and return new object instance.
 * @summary ```import { objectKeysSort } from "@corefunc/corefunc/object/keys/sort";```
 * @param {Object} objectLike Object to be sorted.
 * @param {Boolean=} [isDeep=true] Deep sort.
 * @param {Number=} [depth=8] Depth.
 * @returns {Object} New object with sorted keys.
 */
function objectKeysSort(objectLike, isDeep = true, depth = 8) {
    if (!objectLike || typeof objectLike !== "object" || Array.isArray(objectLike)) {
        return objectLike;
    }
    const keys = Object.keys(objectLike).sort((alpha, beta) => alpha.localeCompare(beta));
    if (!keys.length) {
        return objectLike;
    }
    if (isDeep) {
        return keys.reduce((sorted, key) => {
            if (objectLike[key] && typeof objectLike[key] === "object" && !Array.isArray(objectLike[key])) {
                if (depth > 0) {
                    sorted[key] = objectKeysSort(objectLike[key], true, depth - 1);
                }
                else {
                    sorted[key] = objectLike[key];
                }
            }
            else {
                sorted[key] = objectLike[key];
            }
            return sorted;
        }, Object.create(Object.getPrototypeOf(objectLike)));
    }
    else {
        return keys.reduce((sorted, key) => {
            sorted[key] = objectLike[key];
        }, Object.create(Object.getPrototypeOf(objectLike)));
    }
}
exports.objectKeysSort = objectKeysSort;
