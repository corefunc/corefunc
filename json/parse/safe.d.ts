/**
 * @category JSON Parse
 * @name jsonParseSafe
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Boolean=} fix
 * @param {Function=} reviver
 * @return {*}
 * @url {https://www.youtube.com/watch?v=TTjYjSEGHek}
 */
export declare function jsonParseSafe(text: string, defaultResult?: any, unsafe?: boolean, fix?: boolean, reviver?: (this: any, key: string, value: any) => any): any;
