/**
 * @param {String} text
 * @return {String}
 */
module.exports = function jsonParseStringify(text) {
  return JSON.stringify(JSON.parse(text));
};
