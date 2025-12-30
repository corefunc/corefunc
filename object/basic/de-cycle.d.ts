/**
 * @category Object Basic
 * @name objectBasicDeCycle
 * @description De-cycle object.
 * @summary ``````
 * @param {Object} object Object to de-cycle.
 * @param {String=} _path Path ot property to de-cycle.
 * @returns {Object} De-cycled object.
 * @since 0.1.55
 */
export declare function objectBasicDeCycle<ObjectType extends Record<string, unknown> | unknown[]>(object: ObjectType, _path?: string): ObjectType;
