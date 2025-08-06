/**
 * @name stringMakeReversed
 * @description Reverse string
 * @returns {String} Reversed string
 * @since 0.1.32
 */
export function stringMakeReversed(text) {
  return Array.from(text).reverse().join("");
}