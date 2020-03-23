const jsonParseSafe = require("./safe.cjs");

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Function=} reviver
 * @return {*}
 */
module.exports = function jsonParseWith(text, defaultResult = undefined, unsafe = true, reviver = null) {
  return jsonParseSafe(text, defaultResult, unsafe, false, reviver);
};
