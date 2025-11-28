import { collectionValues } from "../collection/values.js";
import { isFunction } from "../is/function.js";
/**
 * @param {Function} callable
 * @param {Array} args
 * @param {Object=} context
 * @param {Boolean=false} catchExceptions
 * @returns {*}
 */
export function funcAttempt(callable, args = [], context = null, catchExceptions = false) {
    if (!isFunction(callable)) {
        return undefined;
    }
    const fn = callable;
    if (catchExceptions) {
        let returnValue;
        try {
            returnValue = fn.apply(context, collectionValues(args));
        }
        catch {
            // intentionally ignore exceptions
        }
        return returnValue;
    }
    return fn.apply(context, collectionValues(args));
}
//# sourceMappingURL=attempt.js.map