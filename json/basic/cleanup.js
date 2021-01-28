"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonCleanup = void 0;
const string_1 = require("../../cast/to/string.js");
const escaped_1 = require("../../string/make/escaped.js");
function jsonCleanup(text) {
  return escaped_1.stringMakeEscaped(string_1.castToString(text));
}
exports.jsonCleanup = jsonCleanup;
