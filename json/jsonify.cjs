const jsonParseSafe = require("./parse/safe.cjs");
const jsonStringifySafe = require("./stringify/safe.cjs");

/**
 * @param {*} value
 * @return {*}
 */
module.exports = function jsonJsonify(value) {
  return jsonParseSafe(jsonStringifySafe(value));
};
