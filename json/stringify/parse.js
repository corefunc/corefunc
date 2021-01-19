"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonStringifyParse = void 0;
/**
 * @param {*} value
 * @return {*}
 */
function jsonStringifyParse(value) {
    return JSON.parse(JSON.stringify(value));
}
exports.jsonStringifyParse = jsonStringifyParse;
