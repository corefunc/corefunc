import checkIsTraversable from "../../check/isTraversable.mjs";
import collectionForEach from "../../collection/forEach.mjs";
import { jsonParseSafe } from "./safe.mjs";

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Function=} reviver
 * @return {*}
 */
export function jsonParseDeep(text, defaultResult = undefined, reviver = null) {
  const parsed = jsonParseSafe(text, defaultResult, true, true, reviver);
  if (checkIsTraversable(parsed)) {
    collectionForEach(parsed, (value, key) => {
      parsed[key] = jsonParseDeep(value, value);
    });
  }
  return { ...parsed };
}
