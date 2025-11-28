import { jsonParseSafe } from "./safe.js";
/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Function=} reviver
 * @returns {*}
 */
export function jsonParseWith(text, defaultResult, unsafe = true, reviver) {
    return jsonParseSafe(text, defaultResult, unsafe, false, reviver);
}
//# sourceMappingURL=with.js.map