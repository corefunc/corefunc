/**
 * @param {*} value
 * @returns {boolean}
 */
module.exports = function isGeneratorFunction(value) {
  return Object.prototype.toString.call(value) === "[object GeneratorFunction]";
};
