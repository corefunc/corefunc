import castToString from "../../cast/to/string";

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @return {*}
 */
export default function jsonParseUnsafe(text: string, defaultResult?: any): any {
  let result = defaultResult;
  try {
    result = eval(`(${castToString(text)}`);
  } catch (exceptionOnEval) {
    //
  }
  return result;
}
