"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringEscapeEscaped = void 0;
const string_1 = require("../cast/to/string.cjs");
function stringEscapeEscaped(text) {
  return string_1
    .castToString(text)
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
}
exports.stringEscapeEscaped = stringEscapeEscaped;
