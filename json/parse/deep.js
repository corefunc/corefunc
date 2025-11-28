import { checkIsTraversable } from "../../check/is-traversable.js";
import { collectionForEach } from "../../collection/for-each.js";
import { jsonParseSafe } from "./safe.js";
/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Function=} reviver
 * @returns {*}
 */
export function jsonParseDeep(text, defaultResult, reviver) {
    const parsed = jsonParseSafe(text, defaultResult, true, true, reviver);
    if (checkIsTraversable(parsed)) {
        collectionForEach(parsed, (value, key) => {
            parsed[key] = jsonParseDeep(value, value);
        });
    }
    return { ...parsed };
}
//# sourceMappingURL=deep.js.map