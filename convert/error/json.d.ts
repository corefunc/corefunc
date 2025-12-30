/**
 * @category Convert Error
 * @name convertErrorToJson
 * @description Converts Error type to plain JSON object.
 * @param {Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError|Object} error
 * @param {boolean=} [shouldRemoveStackTrace=false]
 * @returns {Object}
 * @since 0.1.40
 */
export declare function convertErrorToJson(error: Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError | Record<string, any>, shouldRemoveStackTrace?: boolean): Record<string, string>;
