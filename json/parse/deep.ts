import { checkIsTraversable } from "../../check/is-traversable";
import { collectionForEach } from "../../collection/for-each";
import { jsonParseSafe } from "./safe";

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Function=} reviver
 * @return {*}
 */
export function jsonParseDeep(
  text: string,
  defaultResult?: any,
  reviver?: (this: any, key: string, value: any) => any,
): any {
  const parsed = jsonParseSafe(text, defaultResult, true, true, reviver);
  if (checkIsTraversable(parsed)) {
    collectionForEach(parsed, (value, key) => {
      parsed[key] = jsonParseDeep(value, value);
    });
  }
  return { ...parsed };
}
