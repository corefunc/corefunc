"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParseStringify = void 0;
/**
 * @param {String} text
 * @return {String}
 */
function jsonParseStringify(text) {
    return JSON.stringify(JSON.parse(text));
}
exports.jsonParseStringify = jsonParseStringify;
