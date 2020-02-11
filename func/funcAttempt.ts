import isFunction from "./../is/isFunction";
import objectValues from "./../object/objectValues";

/**
 * @param {Function} closure
 * @param {Array} args
 * @param {Object=} context
 * @param {Boolean=false} catchExceptions
 * @return {*}
 */
export default function funcAttempt(closure, args = [], context = null, catchExceptions = false) {
  if (isFunction(closure) === false) {
    return undefined;
  }
  if (catchExceptions) {
    let returnValue;
    try {
      returnValue = closure.apply(context, objectValues(args));
    } catch (error) {
      //
    }
    return returnValue;
  }
  return closure.apply(context, objectValues(args));
}
