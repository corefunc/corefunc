import { jsonStringifySafe } from "./safe.mjs";

/**
 * @param {*} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @return {String}
 */
export function jsonStringifyWith(object, replacer, spaces, cycleReplacer) {
  return jsonStringifySafe(object, replacer, spaces, cycleReplacer);
}
