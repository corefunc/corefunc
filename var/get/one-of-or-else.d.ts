/**
 * @name varGetOneOfOrElse
 * @description Get on from list or other value
 * @param {Array} list
 * @param {*} value
 * @param {*=} defaultValue
 * @since 0.0.86
 */
export declare function varGetOneOfOrElse<T, D>(list: T[], value: T, defaultValue?: D): T | D;
