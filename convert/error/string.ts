import { convertErrorToJson } from "./json";

/**
 * @category Convert Error
 * @name convertErrorToString
 * @description Converts error like object to string
 * @summary ```import { convertErrorToString } from "@corefunc/corefunc/convert/error/string";```
 * @param {Error} [error]
 * @returns {string}
 * @since 0.3.4
 * @example ```convertErrorToString({ "message": "Undefined Error" }); ➜ "Undefined Error"```
 */
export function convertErrorToString(
  error: Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError | Record<string, any>,
): string {
  const plain = convertErrorToJson(error);
  return plain.message || String(plain);
}
