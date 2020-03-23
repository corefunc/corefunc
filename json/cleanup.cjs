const castToString = require("../cast/to/string.cjs");
const stringEscapeEscaped = require("../string/escapeEscaped.cjs");

module.exports = function jsonCleanup(text) {
  return stringEscapeEscaped(castToString(text));
};
