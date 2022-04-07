"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertErrorToJson = void 0;
const object_1 = require("./object");
const is_object_like_1 = require("../../check/is-object-like.cjs");
/**
 * @category Convert Error
 * @name convertErrorToJson
 * @description Converts Error type to plain JSON object.
 * @param {Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError|Object} error
 * @param {boolean=} [shouldRemoveStackTrace=false]
 * @returns {Object}
 * @since 0.1.40
 */
function convertErrorToJson(error, shouldRemoveStackTrace = false) {
  if (!is_object_like_1.checkIsObjectLike(error)) {
    const asString = String(error);
    const asJson = { message: asString };
    Object.defineProperty(asJson, "toString", {
      value: () => asString,
    });
    return asJson;
  }
  const plainObject = object_1.convertErrorToObject(error);
  Object.keys(plainObject)
    .sort((alpha, beta) => alpha.localeCompare(beta))
    .forEach((key) => {
      plainObject[key] = String(plainObject[key])
        .split("\n")
        .map((value) => value.trim())
        .join(" ");
    });
  if ("message" in plainObject &&
    plainObject.message &&
    typeof plainObject.message === "string" &&
    plainObject.message.length > 0) {
    Object.defineProperty(plainObject, "toString", {
      value: () => plainObject.message,
    });
  }
  if (shouldRemoveStackTrace) {
    delete plainObject.stack;
    delete plainObject.stackTrace;
  }
  return plainObject;
}
exports.convertErrorToJson = convertErrorToJson;
