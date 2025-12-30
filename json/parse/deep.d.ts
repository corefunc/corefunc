/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Function=} reviver
 * @returns {*}
 */
export declare function jsonParseDeep(text: string, defaultResult?: unknown, reviver?: (this: any, key: string, value: any) => any): unknown;
