import { convertErrorToObject } from "./object";
import { checkIsObjectLike } from "../../check/is-object-like";

/**
 * @category Convert Error
 * @name convertErrorToJson
 * @description Converts Error type to plain JSON object.
 * @param {Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError|Object} error
 * @param {boolean=} [shouldRemoveStackTrace=false]
 * @returns {Object}
 * @since 0.1.40
 */
export function convertErrorToJson(
  error: Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError | Record<string, any>,
  shouldRemoveStackTrace: boolean = false,
): Record<string, string> {
  if (!checkIsObjectLike(error)) {
    const asString = String(error);
    const asJson = { message: asString };
    Object.defineProperty(asJson, "toString", {
      value: () => asString,
    });
    return asJson;
  }
  const plainObject = convertErrorToObject(error);
  Object.keys(plainObject)
    .sort((alpha, beta) => alpha.localeCompare(beta))
    .forEach((key) => {
      plainObject[key] = String(plainObject[key])
        .split("\n")
        .map((value) => value.trim())
        .join(" ");
    });
  if (
    "message" in plainObject &&
    plainObject.message &&
    typeof plainObject.message === "string" &&
    plainObject.message.length > 0
  ) {
    Object.defineProperty(plainObject, "toString", {
      value: () => plainObject.message,
    });
  }
  if (shouldRemoveStackTrace) {
    delete plainObject.stack;
    delete plainObject.stackTrace;
  }
  return plainObject as Record<string, string>;
}
