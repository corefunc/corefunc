"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectionKeys = void 0;
const is_keyed_1 = require("../check/is-keyed");
const is_object_like_1 = require("../check/is-object-like");
/**
 * Pick object property from list of names
 * @param {*} iterable
 * @returns {Array}
 */
function collectionKeys(iterable) {
    if (!iterable) {
        return [];
    }
    if (Array.isArray(iterable) || is_keyed_1.checkIsKeyed(iterable)) {
        return Array.from(iterable.keys());
    }
    if (is_object_like_1.checkIsObjectLike(iterable) === false) {
        return [];
    }
    return Object.keys(iterable);
}
exports.collectionKeys = collectionKeys;
