"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
const string_1 = require("../is/string");
/**
 * @category Language
 * @name match
 * @description Match expression
 * @summary ```import { match } from "@corefunc/corefunc/lang/match";```
 * @param {*} [value]
 * @param {Map|Object|WeakMap} [subjectExpression]
 * @param {*} [defaultValue=undefined]
 * @param {boolean} [convertToString=false]
 * @returns {*}
 * @since 0.3.3
 * @example ```match(String(5), { "1": "One", "3": "Three", "5": "Five" }); ➜ "Five"```
 * @example ```match(5, new Map([ ["5", "Oh no!"], [5, "OK"], ])); ➜ "OK"```
 * @example ```match(5, { 5: "Five" }, undefined, true); ➜ "Five"```
 */
function match(value, subjectExpression, defaultValue = undefined, convertToString = false) {
    if (!subjectExpression || typeof subjectExpression !== "object" || Array.isArray(subjectExpression)) {
        return defaultValue;
    }
    if (subjectExpression instanceof Map || subjectExpression instanceof WeakMap) {
        if (subjectExpression.has(value)) {
            return subjectExpression.get(value);
        }
        return defaultValue;
    }
    if (!convertToString && !string_1.isString(value)) {
        return defaultValue;
    }
    const key = String(value);
    if (key in subjectExpression) {
        return subjectExpression[key];
    }
    return defaultValue;
}
exports.match = match;
