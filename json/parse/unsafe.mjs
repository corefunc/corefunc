import castToString from "../../cast/to/string.mjs";

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @return {*}
 */
export default function jsonParseUnsafe(text, defaultResult = undefined) {
  let result = defaultResult;
  try {
    result = eval(`(${castToString(text)}`);
  } catch (exceptionOnEval) {
    //
  }
  return result;
}
