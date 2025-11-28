/**
 * @name collectionAtAny
 * @description Pick object property from list of names
 * @param {*} object
 * @param {Array} propertyNames
 * @param {*=} onFail
 * @returns {*}
 */
export declare function collectionAtAny<T>(object: Record<string, T>, propertyNames: Array<string>, onFail: T): T;
