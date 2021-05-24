"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonJsonify = void 0;
const safe_1 = require("../parse/safe");
const safe_2 = require("../stringify/safe");
/**
 * @category JSON Basic
 * @name jsonJsonify
 * @description Attempts to convert any value to JSON allowed value.
 * @summary ```import { jsonJsonify } from "@corefunc/corefunc/json/basic/jsonify";```
 * @param {*} [value] Any value.
 * @param {*=} [defaultResult=undefined] Result in case of error.
 * @param {Boolean=} [unsafe=true] Use unsafe parsing.
 * @param {Boolean=} [fix=true] Fix incorrect JSON string.
 * @returns {*} Plain value or plain object.
 * @since 0.0.87
 * @example ```jsonJsonify({ 1: "one" }) ➜ {"1":"one"}```
 */
function jsonJsonify(
//
value, defaultResult, unsafe = true, fix = true) {
    return safe_1.jsonParseSafe(safe_2.jsonStringifySafe(value), defaultResult, unsafe, fix);
}
exports.jsonJsonify = jsonJsonify;
