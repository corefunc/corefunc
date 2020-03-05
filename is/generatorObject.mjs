/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isGeneratorObject(value) {
  return Object.prototype.toString.call(value) === "[object Generator]";
}
