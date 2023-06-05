"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSetDefaults = void 0;
const is_object_like_1 = require("../../check/is-object-like");
/**
 * @category Object Set
 * @name objectSetDefaults
 * @param {Object} destination
 * @param {Object} source
 * @param {{ arrayMergeToUnique?: boolean; nullAsUndefined?: boolean; objectDeepMerge?: boolean, undefinedPreservation?: boolean }} [options]
 * @returns {Object}
 * @example objectSetDefaults({}, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: undefined }, { val: true }) // { val: true }
 * @example objectSetDefaults({ val: null }, { val: true }) // { val: null }
 * @example objectSetDefaults({ val: "text" }, { val: true }) // { val: "text" }
 */
function objectSetDefaults(destination, source, options = {
    arrayMergeToUnique: false,
    nullAsUndefined: false,
    objectDeepMerge: false,
    undefinedPreservation: false,
}) {
    if (!is_object_like_1.checkIsObjectLike(destination)) {
        return objectSetDefaults({}, source);
    }
    if (!is_object_like_1.checkIsObjectLike(source)) {
        return objectSetDefaults(destination, {});
    }
    const obj = Object.assign(Object.create(Object.getPrototypeOf(destination)));
    Array.from(new Set([...Object.keys(destination), ...Object.keys(source)]))
        .filter((key) => !["__proto__", "constructor"].includes(key))
        .sort((alpha, beta) => alpha.localeCompare(beta))
        .forEach(function (key) {
        if (!(key in source)) {
            obj[key] = destination[key];
            return;
        }
        const valDest = destination[key];
        const valSrc = source[key];
        if (valDest === undefined && valSrc === undefined) {
            if (options.undefinedPreservation) {
                obj[key] = undefined;
            }
            return;
        }
        if (options.nullAsUndefined && valDest === null && valSrc === null) {
            if (options.undefinedPreservation) {
                obj[key] = null;
            }
            return;
        }
        if (is_object_like_1.checkIsObjectLike(valSrc) && is_object_like_1.checkIsObjectLike(valDest)) {
            if (valSrc instanceof Date ||
                valSrc instanceof Error ||
                valSrc instanceof Map ||
                valSrc instanceof RegExp ||
                valSrc instanceof Set ||
                valSrc instanceof WeakMap ||
                valSrc instanceof WeakSet) {
                obj[key] = valSrc;
            }
            else {
                if (options.objectDeepMerge) {
                    obj[key] = objectSetDefaults(valDest, valSrc, options);
                }
                else {
                    obj[key] = valSrc;
                }
            }
        }
        else if (Array.isArray(valDest) && Array.isArray(valSrc)) {
            if (options.arrayMergeToUnique) {
                obj[key] = Array.from(new Set([...valDest, ...valSrc])).sort();
            }
            else {
                obj[key] = valSrc;
            }
        }
        else {
            if (options.nullAsUndefined) {
                if (valSrc === null) {
                    obj[key] = valDest;
                }
                else {
                    obj[key] = valSrc;
                }
            }
            else {
                if (valSrc === undefined) {
                    obj[key] = valDest;
                }
                else {
                    obj[key] = valSrc;
                }
            }
        }
    });
    return obj;
}
exports.objectSetDefaults = objectSetDefaults;
