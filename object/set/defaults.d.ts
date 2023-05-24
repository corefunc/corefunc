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
export declare function objectSetDefaults<Dest extends object, Src extends object>(destination: Dest, source: Src, options?: {
    arrayMergeToUnique?: boolean;
    nullAsUndefined?: boolean;
    objectDeepMerge?: boolean;
    undefinedPreservation?: boolean;
}): Dest & Src;
