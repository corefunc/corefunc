"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonCleanup = void 0;
const string_1 = require("../../cast/to/string");
const escapeEscaped_1 = require("../../string/escapeEscaped");
function jsonCleanup(text) {
    return escapeEscaped_1.stringEscapeEscaped(string_1.castToString(text));
}
exports.jsonCleanup = jsonCleanup;
