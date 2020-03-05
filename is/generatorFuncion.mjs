/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isGeneratorFunction(value) {
  return Object.prototype.toString.call(value) === "[object GeneratorFunction]";
}
