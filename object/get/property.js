"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectGetProperty = void 0;
const type_1 = require("./type");
/**
 * @category Object Get
 * @name objectGetProperty
 * @description Gets the value at path of object.
 * @summary ```import { objectGetProperty } from '@corefunc/corefunc/object/get/property';```
 * @param {Object} object Object to search in
 * @param {String|Array.<String>} keyOrPath String key or array of string to form path
 * @param {*=} [defaultValue=undefined] Default value if path is not exists. Does not replace undefined values
 * @param {string=} [valueType]
 * @returns {*} Value in path or default value
 * @since 0.0.47
 * @deprecated Use optional chaining instead
 * ```javascript
 * const value = object?.property?.subProperty ?? "N/A";
 * ```
 */
function objectGetProperty(object, keyOrPath, defaultValue, valueType) {
    if (!object || typeof object !== "object") {
        return defaultValue;
    }
    if (typeof keyOrPath === "string" && keyOrPath in object) {
        if (object[keyOrPath] === undefined) {
            return defaultValue;
        }
        if (valueType && type_1.objectGetType(object[keyOrPath]) !== valueType) {
            return defaultValue;
        }
        return object[keyOrPath];
    }
    let keySet;
    if (typeof keyOrPath === "string") {
        keySet = keyOrPath.split(".");
    }
    else if (Array.isArray(keyOrPath)) {
        keySet = keyOrPath;
    }
    else {
        return defaultValue;
    }
    const length = keySet.length;
    if (length === 1) {
        if (keySet[0] in object) {
            if (object[keySet[0]] === undefined) {
                return defaultValue;
            }
            if (valueType && type_1.objectGetType(object[keySet[0]]) !== valueType) {
                return defaultValue;
            }
            return object[keySet[0]];
        }
        else {
            return defaultValue;
        }
    }
    let index = 0;
    let newObject;
    try {
        newObject = { ...object };
    }
    catch {
        try {
            newObject = JSON.parse(JSON.stringify(object));
        }
        catch {
            return defaultValue;
        }
    }
    let isSet = false;
    while (newObject !== null && index < length) {
        // @ts-ignore
        isSet = keySet[index] in newObject;
        newObject = newObject[keySet[index]];
        index += 1;
    }
    if (index && index === length) {
        if (newObject === undefined) {
            if (isSet) {
                if (valueType && type_1.objectGetType(newObject) !== valueType) {
                    return defaultValue;
                }
                return newObject;
            }
            return defaultValue;
        }
        else {
            if (valueType && type_1.objectGetType(newObject) !== valueType) {
                return defaultValue;
            }
            return newObject;
        }
    }
    else {
        return defaultValue;
    }
}
exports.objectGetProperty = objectGetProperty;
