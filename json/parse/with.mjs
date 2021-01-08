import { jsonParseSafe } from "./safe.mjs";

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Function=} reviver
 * @return {*}
 */
export function jsonParseWith(text, defaultResult = undefined, unsafe = true, reviver = null) {
  return jsonParseSafe(text, defaultResult, unsafe, false, reviver);
}
