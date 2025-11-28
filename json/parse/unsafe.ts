import { castToString } from "../../cast/to/string.js";

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @returns {*}
 */
export function jsonParseUnsafe(text: string, defaultResult?: any): any {
  let result = defaultResult;
  try {
    result = eval(`(${castToString(text)}`);
  } catch {
    //
  }
  return result;
}
