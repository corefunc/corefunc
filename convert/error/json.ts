import { convertErrorToObject } from "./object";

/**
 * @name convertErrorToJson
 * @description Converts Error type to plain JSON object.
 * @param {Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError|Object} error
 * @returns {Object}
 * @since 0.1.40
 */
export function convertErrorToJson(
  error: Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError | Record<string, any>,
): Record<string, string> {
  const plainObject = convertErrorToObject(error);
  Object.keys(plainObject)
    .sort((alpha, beta) => alpha.localeCompare(beta))
    .forEach((key) => {
      plainObject[key] = String(plainObject[key])
        .split("\n")
        .map((value) => value.trim())
        .join(" ");
    });
  return plainObject as Record<string, string>;
}
