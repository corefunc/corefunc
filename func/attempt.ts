import { collectionValues } from "../collection/values.js";
import { isFunction } from "../is/function.js";

/**
 * @param {Function} callable
 * @param {Array} args
 * @param {Object=} context
 * @param {Boolean=false} catchExceptions
 * @returns {*}
 */
export function funcAttempt(
  callable: unknown,
  args: unknown[] = [],
  context: unknown = null,
  catchExceptions = false,
): unknown {
  if (!isFunction(callable)) {
    return undefined;
  }
  const fn = callable as (..._fnArgs: unknown[]) => unknown;
  if (catchExceptions) {
    let returnValue: unknown;
    try {
      returnValue = fn.apply(context, collectionValues(args));
    } catch {
      // intentionally ignore exceptions
    }
    return returnValue;
  }
  return fn.apply(context, collectionValues(args));
}
