"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonCleanup = void 0;
const string_1 = require("../../cast/to/string.cjs");
const escapeEscaped_1 = require("../../string/escapeEscaped.cjs");
function jsonCleanup(text) {
  return escapeEscaped_1.default(string_1.default(text));
}
exports.jsonCleanup = jsonCleanup;
