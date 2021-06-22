import { convertErrorToJson } from "./json.mjs";

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
export function convertErrorToString(error) {
  const plain = convertErrorToJson(error);
  return plain.message || String(plain);
}
