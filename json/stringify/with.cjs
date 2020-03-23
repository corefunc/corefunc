const jsonStringifySafe = require("./safe.cjs");

/**
 * @param {*} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
module.exports = function jsonStringifyWith(object, replacer, spaces, cycleReplacer) {
  return jsonStringifySafe(object, replacer, spaces, cycleReplacer);
};
