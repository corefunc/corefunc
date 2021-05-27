"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jsonParseDeep = void 0;
const is_traversable_1 = require("../../check/is-traversable");
const for_each_1 = require("../../collection/for-each");
const safe_1 = require("./safe");
/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Function=} reviver
 * @return {*}
 */
function jsonParseDeep(text, defaultResult, reviver) {
    const parsed = safe_1.jsonParseSafe(text, defaultResult, true, true, reviver);
    if (is_traversable_1.checkIsTraversable(parsed)) {
        for_each_1.collectionForEach(parsed, (value, key) => {
            parsed[key] = jsonParseDeep(value, value);
        });
    }
    return { ...parsed };
}
exports.jsonParseDeep = jsonParseDeep;
