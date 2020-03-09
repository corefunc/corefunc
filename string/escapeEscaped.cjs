import castToString from "../cast/to/string.cjs";

module.exports = function stringEscapeEscaped(text) {
  return castToString(text)
    .replace(/\\{3}/g, "")
    .replace(/\\{2}r/g, "")
    .replace(/\\{2}n/g, "")
    .replace(/\\{2}rn/g, "")
    .replace(/n\s/g, "")
    .replace(/\n/g, "")
    .replace(/n}/g, "}")
    .replace(/\\n/g, "\\n")
    .replace(/\\'/g, "\\'")
    .replace(/\\"/g, '\\"')
    .replace(/\\&/g, "\\&")
    .replace(/\\r/g, "\\r")
    .replace(/\\t/g, "\\t")
    .replace(/\\b/g, "\\b")
    .replace(/\\f/g, "\\f");
};
