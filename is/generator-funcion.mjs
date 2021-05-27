/**
 * @param {*} value
 * @returns {boolean}
 */
export function isGeneratorFunction(value) {
  return Object.prototype.toString.call(value) === "[object GeneratorFunction]";
}
