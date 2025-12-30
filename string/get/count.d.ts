/**
 * @name stringGetCount
 * @category String
 * @description
 * Get count of symbols in text.
 * This is NOT string length.
 * It counts grapheme clusters.
 * If not a string just returns 0.
 * @summary ```import { stringGetCount } from "@corefunc/corefunc/string/get/count";```
 * @param {String} text The string being measured for length.
 * @returns {Number}
 */
export declare function stringGetCount(text: string | any): number;
