import { jsonParseSafe } from "./safe.js";

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Function=} reviver
 * @returns {*}
 */
export function jsonParseWith(
  text: string,
  defaultResult?: any,
  unsafe: boolean = true,
  reviver?: (this: any, key: string, value: any) => any,
): any {
  return jsonParseSafe(text, defaultResult, unsafe, false, reviver);
}
