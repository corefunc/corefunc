import { jsonStringifySafe } from "./safe.js";
/**
 * @param {*} object
 * @param {Function=} replacer
 * @param {String=} spaces
 * @param {Function=} cycleReplacer
 * @returns {String}
 */
export function jsonStringifyWith(object, replacer, spaces, cycleReplacer) {
    return jsonStringifySafe(object, replacer, spaces, cycleReplacer);
}
//# sourceMappingURL=with.js.map