import { castToString } from "../../cast/to/string.js";
/**
 * @param {String} text
 * @param {*=} defaultResult
 * @returns {*}
 */
export function jsonParseUnsafe(text, defaultResult) {
    let result = defaultResult;
    try {
        result = eval(`(${castToString(text)}`);
    }
    catch {
        //
    }
    return result;
}
