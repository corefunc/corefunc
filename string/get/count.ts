let segmenter: Intl.Segmenter | undefined;

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
export function stringGetCount(text: string | any): number {
  if (!text) {
    return 0;
  }
  if (typeof text !== "string") {
    return 0; // You deserve it
  }
  if (text.length === 0) {
    return 0;
  }
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    if (!segmenter) {
      segmenter = new Intl.Segmenter();
    }
    return [...segmenter.segment(text)].length;
  }
  return [...text].length;
}
