import { jsonParseSafe } from "../parse/safe";
import { jsonStringifySafe } from "../stringify/safe";

/**
 * @name jsonJsonify
 * @description Attempts to convert any value to JSON allowed value
 * @param {*} value Any value
 * @returns {*} Plain value or plain object
 * @since 0.0.87
 * @example ```jsonJsonify({ 1: "one" }) ➜ {"1":"one"}```
 */
export function jsonJsonify(value: any): any {
  return jsonParseSafe(jsonStringifySafe(value));
}
