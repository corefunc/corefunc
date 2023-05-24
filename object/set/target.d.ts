/**
 * @category Object Set
 * @name objectSetTarget
 * @description Set source object to target object. Override properties in target object. Do not create new object. Do not override undefined properties.
 * @summary ```import { objectSetTarget } from "@corefunc/corefunc/object/set/target";```
 * @param {Object} destination
 * @param {Object} source
 * @param {{ arrayMergeToUnique?: boolean; nullAsUndefined?: boolean; objectDeepMerge?: boolean; undefinedPreservation?: boolean }} [options]
 * @returns {Object}
 * @since 0.3.63
 */
export declare function objectSetTarget<Target extends object, Source extends object>(destination: Target, source: Source, options?: {
    arrayMergeToUnique?: boolean;
    nullAsUndefined?: boolean;
    objectDeepMerge?: boolean;
    undefinedPreservation?: boolean;
}): Target & Source;
