/**
 * @name stringGetCount
 * @description Get count of symbols in text. This is not string length.
 * @param {String} text The string being measured for length.
 * @returns {Number}
 */
export function stringGetCount(text) {
  return [...text].length;
}