/**
 * @category Object Is
 * @name objectIsEmpty
 * @description Checks wherever object is empty
 * @param {Object} object
 * @param {Boolean} [withNotEnumerable=false]
 * @returns {Boolean}
 * @example
 * const object = {};
 * Object.defineProperties(object, { key: { enumerable: false } });
 * objectIsEmpty(object) ➜ true
 * objectIsEmpty(object, false) ➜ true
 * objectIsEmpty(object, true) ➜ false
 * @since 0.1.45
 */
export declare function objectIsEmpty(object: Record<string, any>, withNotEnumerable?: boolean): boolean;
