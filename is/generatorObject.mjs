/**
 * @param {*} value
 * @returns {boolean}
 */
export function isGeneratorObject(value) {
  return Object.prototype.toString.call(value) === "[object Generator]";
}
