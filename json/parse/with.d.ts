/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Function=} reviver
 * @returns {*}
 */
export declare function jsonParseWith(text: string, defaultResult?: any, unsafe?: boolean, reviver?: (this: any, key: string, value: any) => any): any;
