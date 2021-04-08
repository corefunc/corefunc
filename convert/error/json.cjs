"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertErrorToJson = void 0;
const object_1 = require("./object.cjs");
/**
 * @name convertErrorToJson
 * @description Converts Error type to plain JSON object.
 * @param {Error | EvalError | RangeError | ReferenceError | SyntaxError | TypeError | URIError|Object} error
 * @returns {Object}
 * @since 0.1.40
 */
function convertErrorToJson(error) {
    const plainObject = object_1.convertErrorToObject(error);
    Object.keys(plainObject)
        .sort((alpha, beta) => alpha.localeCompare(beta))
        .forEach((key) => {
        plainObject[key] = String(plainObject[key])
            .split("\n")
            .map((value) => value.trim())
            .join(" ");
    });
    return plainObject;
}
exports.convertErrorToJson = convertErrorToJson;
