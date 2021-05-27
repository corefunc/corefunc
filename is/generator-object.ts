/**
 * @param {*} value
 * @returns {boolean}
 */
export function isGeneratorObject(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Generator]";
}
