/**
 * @category Convert Error
 * @name convertErrorToObject
 * @description Converts Error type to plain object.
 * @param {Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError|Object} error
 * @param {boolean=} [shouldRemoveStackTrace=true]
 * @param {boolean=} [shouldBeJson=false]
 * @returns {Record<string, any>}
 * @since 0.1.40
 */
export declare function convertErrorToObject(error: Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError | Record<string, any>, shouldRemoveStackTrace?: boolean, shouldBeJson?: boolean): Record<string, any>;
