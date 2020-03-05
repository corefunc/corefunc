/**
 * @param {*} value
 * @returns {boolean}
 */
export default function isGeneratorObject(value: any): boolean {
  return Object.prototype.toString.call(value) === "[object Generator]";
}
