import { jsonParseSafe } from "../parse/safe.mjs";
import { jsonStringifySafe } from "../stringify/safe.mjs";

/**
 * @name jsonJsonify
 * @description Attempts to convert any value to JSON allowed value
 * @param {*} value Any value
 * @param {*=} [defaultResult=undefined] Result in case of error
 * @param {Boolean=} [unsafe=true] Use unsafe parsing
 * @param {Boolean=} [fix=true] Fix incorrect JSON string
 * @returns {*} Plain value or plain object
 * @since 0.0.87
 * @example ```jsonJsonify({ 1: "one" }) ➜ {"1":"one"}```
 */
export function jsonJsonify(
  //
  value,
  defaultResult,
  unsafe = true,
  fix = true,
) {
  return jsonParseSafe(jsonStringifySafe(value), defaultResult, unsafe, fix);
}
