"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertErrorToString = void 0;
const json_1 = require("./json.cjs");
/**
 * @category Convert Error
 * @name convertErrorToString
 * @description Converts error like object to string
 * @summary ```import { convertErrorToString } from "@corefunc/corefunc/convert/error/string";```
 * @param {Error} [error]
 * @returns {string}
 * @since 0.3.4
 * @example ```convertErrorToString({ "message": "Undefined Error" }); ➜ "Undefined Error"```
 */
function convertErrorToString(error) {
    const plain = json_1.convertErrorToJson(error);
    return plain.message || String(plain);
}
exports.convertErrorToString = convertErrorToString;
