"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isKeyed_1 = require("../check/isKeyed");
const isObjectLike_1 = require("../check/isObjectLike");
/**
 * Pick object property from list of names
 * @param {*} iterable
 * @returns {Array}
 */
function collectionKeys(iterable) {
    if (!iterable) {
        return [];
    }
    if (Array.isArray(iterable) || isKeyed_1.default(iterable)) {
        return Array.from(iterable.keys());
    }
    if (isObjectLike_1.default(iterable) === false) {
        return [];
    }
    return Object.keys(iterable);
}
exports.default = collectionKeys;
