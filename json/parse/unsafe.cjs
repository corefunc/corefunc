const castToString = require("../../cast/to/string.cjs");

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @return {*}
 */
module.exports = function jsonParseUnsafe(text, defaultResult = undefined) {
  let result = defaultResult;
  try {
    result = eval(`(${castToString(text)}`);
  } catch (exceptionOnEval) {
    //
  }
  return result;
};
