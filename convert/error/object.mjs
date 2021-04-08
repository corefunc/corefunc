/**
 * @name convertErrorToObject
 * @description Converts Error type to plain object.
 * @param {Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError|Object} error
 * @returns {Object}
 * @since 0.1.40
 */
export function convertErrorToObject(error) {
  return JSON.parse(JSON.stringify(error, Object.getOwnPropertyNames(error)));
}
