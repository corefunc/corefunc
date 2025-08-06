/**
 * @category Convert Error
 * @name errorToCaller
 * @description Converts Error type to caller name.
 * @summary ```import { errorToCaller } from "@corefunc/corefunc/convert/error/caller";```
 * @param {Error|EvalError|RangeError|ReferenceError|SyntaxError|TypeError|URIError} error
 * @returns {string} - Function, class and method name. Or 'Module._compile' and 'ModuleJob.run' if root.
 * @since 0.3.44
 */
export function errorToCaller(error) {
  return error.stack.split('\n')[2].trim().split(' ')[1];
}
