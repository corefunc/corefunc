import { jsonCleanup } from "../basic/cleanup";
import { jsonParseUnsafe } from "./unsafe";

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Boolean=} fix
 * @param {Function=} reviver
 * @return {*}
 */
export function jsonParseSafe(
  text: string,
  defaultResult?: any,
  unsafe: boolean = true,
  fix: boolean = true,
  reviver?: (this: any, key: string, value: any) => any,
): any {
  if (!text) {
    return defaultResult;
  }
  if (typeof text === "object") {
    return text;
  }
  let result = defaultResult;
  try {
    result = JSON.parse(text, reviver);
  } catch (exceptionOnParse) {
    if (unsafe) {
      try {
        result = jsonParseUnsafe(text, new Error("JSON unsafe parse failed"));
      } catch (exceptionOnEval) {
        if (fix) {
          result = jsonParseSafe(jsonCleanup(text), defaultResult, true, false, reviver);
        }
      }
    }
  }
  return result;
}
