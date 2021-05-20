"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParseAttempt = void 0;
const safe_1 = require("./safe");
/**
 * @category JSON Parse
 * @name jsonParseAttempt
 * @description Trying parse value and if fails return original value.
 * @summary ```import { jsonParseAttempt } from "@corefunc/corefunc/json/parse/attempt";```
 * @param {*} [value] Value to parse.
 * @returns {*} Parsed value or original value.
 * @since 0.2.2
 */
function jsonParseAttempt(value) {
    return safe_1.jsonParseSafe(value, value, false, false);
}
exports.jsonParseAttempt = jsonParseAttempt;
