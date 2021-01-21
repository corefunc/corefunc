import { collectionValues } from "../collection/values";
import isFunction from "../is/function";

/**
 * @param {Function} callable
 * @param {Array} args
 * @param {Object=} context
 * @param {Boolean=false} catchExceptions
 * @return {*}
 */
export function funcAttempt(callable, args = [], context = null, catchExceptions = false) {
  if (isFunction(callable) === false) {
    return undefined;
  }
  if (catchExceptions) {
    let returnValue;
    try {
      returnValue = callable.apply(context, collectionValues(args));
    } catch (error) {
      //
    }
    return returnValue;
  }
  return callable.apply(context, collectionValues(args));
}
