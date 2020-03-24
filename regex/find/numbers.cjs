/**
 * Executes a search for a match between a regular expression and a specified string.
 * @param {String} text
 * @return {Array}
 */
module.exports = function regexFindNumbers(text) {
  return (text.match(/[+-]?\d+(\.\d+)?/g) || []).map(Number);
};
