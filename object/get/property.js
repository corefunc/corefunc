"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectGetProperty = void 0;
/**
 * @category Object Get
 * @name objectGetProperty
 * @description Gets the value at path of object.
 * @summary ```import { objectGetProperty } from '@corefunc/corefunc/object/get/property';```
 * @param {Object} object Object to search in
 * @param {String|Array.<String>} keyOrPath String key or array of string to form path
 * @param {*=} [defaultValue=undefined] Default value if path is not exists. Does not replace undefined values
 * @returns {*} Value in path or default value
 * @since 0.0.47
 */
function objectGetProperty(
//
object, keyOrPath, defaultValue) {
    if (!object || typeof object !== "object") {
        return defaultValue;
    }
    if (typeof keyOrPath === "string" && keyOrPath in object) {
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
            return object[keySet[0]];
        }
        else {
            return defaultValue;
        }
    }
    let index = 0;
    let newObject;
    try {
        newObject = Object.assign({}, object);
    }
    catch (_a) {
        try {
            newObject = JSON.parse(JSON.stringify(object));
        }
        catch (_b) {
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
                return newObject;
            }
            return defaultValue;
        }
        else {
            return newObject;
        }
    }
    else {
        return defaultValue;
    }
}
exports.objectGetProperty = objectGetProperty;
