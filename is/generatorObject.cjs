/**
 * @param {*} value
 * @returns {boolean}
 */
module.exports = function isGeneratorObject(value) {
  return Object.prototype.toString.call(value) === "[object Generator]";
};
