import { jsonStringifySafe } from "./safe.js";

/**
 * @param {*} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @returns {String}
 */
export function jsonStringifyWith(
  object: any,
  replacer?: (this: any, key: string, value: any) => any,
  spaces?: string | number,
  cycleReplacer?: (key: string, value: any) => any,
): string {
  return jsonStringifySafe(object, replacer, spaces, cycleReplacer);
}
