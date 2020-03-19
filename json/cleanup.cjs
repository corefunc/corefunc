import castToString from "../cast/to/string.mjs";
import stringEscapeEscaped from "../string/escapeEscaped.mjs";

module.exports = function jsonCleanup(text) {
  return stringEscapeEscaped(castToString(text));
};
