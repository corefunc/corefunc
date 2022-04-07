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
export function convertErrorToObject(
  error,
  shouldRemoveStackTrace = true,
  shouldBeJson = false,
) {
  const keys = new Set([...Object.getOwnPropertyNames(error), ...Object.keys(error)]);
  const record = Array.from(keys).reduce((errorAsObj, key) => {
    errorAsObj[key] = error[key];
    return errorAsObj;
  }, {});
  if (shouldRemoveStackTrace) {
    delete record.stack;
    delete record.stackTrace;
  }
  if (!shouldBeJson) {
    return record;
  }
  return JSON.parse(JSON.stringify(record));
}
