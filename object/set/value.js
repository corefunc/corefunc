"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSetValue = void 0;
const is_object_like_1 = require("../../check/is-object-like");
const map_1 = require("../../is/map");
const set_1 = require("../../is/set");
const weak_map_1 = require("../../is/weak-map");
const weak_set_1 = require("../../is/weak-set");
/**
 * @category Object Set
 * @name objectSetValue
 * @description Sets the value at key of object.
 * @summary ```import { objectSetValue } from '@corefunc/corefunc/object/set/value';```
 * @param {Object|Map|Set|WeakSet|WeakMap} object Object to set in.
 * @param {String} [key] Key name.
 * @param {*} [value] Value to set.
 * @returns {Object|Map|Set|WeakSet|WeakMap} Object that was modified.
 * @since 0.1.55
 */
function objectSetValue(object, key, value) {
    if (is_object_like_1.checkIsObjectLike(object) === false) {
        return object;
    }
    if (map_1.isMap(object) || weak_map_1.isWeakMap(object)) {
        object.set(key, value);
    }
    if (set_1.isSet(object) || weak_set_1.isWeakSet(object)) {
        if (arguments.length > 2) {
            object.add(value);
        }
        else {
            object.add(key);
        }
    }
    else {
        object[key] = value;
    }
    return object;
}
exports.objectSetValue = objectSetValue;
