/**
 * @param {*} value
 * @returns {boolean}
 */
export function isGeneratorFunction(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object GeneratorFunction]";
}
