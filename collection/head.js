"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.head = void 0;
const cloneDeep_1 = require("lodash-es/cloneDeep");
const head_1 = require("lodash-es/head");
const keys_1 = require("lodash-es/keys");
const sortBy_1 = require("lodash-es/sortBy");
const map_1 = require("../is/map");
const set_1 = require("../is/set");
const isTraversable_1 = require("../check/isTraversable");
/**
 * Gets the first element of traversable variable
 * @param {Arguments|Array|Map|Object|Set|WeakMap|WeakSet} iterable
 * @param {Boolean=true} clone
 * @param {*=} defaultValue
 * @return {*}
 * @example head(null) ➜ undefined
 * @example head(null, 0) ➜ 0
 * @example head([], 0) ➜ 0
 * @example head([], new Error("Array should not be empty!"))
 * @example head([0, 1, 2]) ➜ 0
 * @example head({b: 1, a: 2,}) ➜ 2
 * @example head(new Set([1, 2, 3])) ➜ 1
 * @example head(new Map([["b", 1], ["a", 2]]))  ➜ 2
 */
function head(iterable, clone = true, defaultValue = undefined) {
    if (!iterable) {
        return defaultValue;
    }
    if (!isTraversable_1.checkIsTraversable(iterable)) {
        return cloneDeep_1.default(defaultValue);
    }
    if (Array.isArray(iterable)) {
        if (iterable.length === 0) {
            return defaultValue;
        }
        if (clone) {
            return cloneDeep_1.default(head_1.default(iterable));
        }
        else {
            return head_1.default(iterable);
        }
    }
    if (set_1.default(iterable)) {
        const values = Array.from(iterable.values());
        if (values.length === 0) {
            return defaultValue;
        }
        if (clone) {
            return cloneDeep_1.default(head_1.default(values));
        }
        else {
            return head_1.default(values);
        }
    }
    if (map_1.default(iterable)) {
        const keys = sortBy_1.default(Array.from(iterable.keys()));
        if (keys.length === 0) {
            return defaultValue;
        }
        if (clone) {
            return cloneDeep_1.default(iterable.get(head_1.default(keys)));
        }
        else {
            return iterable.get(head_1.default(keys));
        }
    }
    const keys = sortBy_1.default(keys_1.default(iterable));
    if (keys.length === 0) {
        return defaultValue;
    }
    if (clone) {
        return cloneDeep_1.default(iterable[keys[0]]);
    }
    else {
        return iterable[keys[0]];
    }
}
exports.head = head;
