"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectSetTarget = void 0;
const defaults_1 = require("./defaults");
/**
 * @category Object Set
 * @name objectSetTarget
 * @description Set source object to target object. Override properties in target object. Do not create new object. Do not override undefined properties.
 * @summary ```import { objectSetTarget } from "@corefunc/corefunc/object/set/target";```
 * @param {Object} destination
 * @param {Object} source
 * @param {{ arrayMergeToUnique?: boolean; nullAsUndefined?: boolean; objectDeepMerge?: boolean; }=} [options]
 * @returns {Object}
 * @since 0.3.63
 */
function objectSetTarget(destination, source, options = {
    arrayMergeToUnique: false,
    nullAsUndefined: true,
    objectDeepMerge: false,
}) {
    Object.assign(destination, defaults_1.objectSetDefaults(destination, source, options));
    return destination;
}
exports.objectSetTarget = objectSetTarget;
