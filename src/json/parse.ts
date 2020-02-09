import fnCleanup from "./cleanup";
import fnParseUnsafe from "./parseUnsafe";

/**
 * @param {String} string
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Boolean=} fix
 * @param {Function=} reviver
 * @return {Object}
 */
function parse(string, defaultResult, unsafe = true, fix = true, reviver?) {
  if (!string) {
    return defaultResult;
  }
  if (typeof string === "object") {
    return string;
  }
  let result = defaultResult;
  try {
    result = JSON.parse(string, reviver);
  } catch (exceptionOnParse) {
    if (unsafe) {
      try {
        result = fnParseUnsafe(string, new Error("parseUnsafe failed"));
      } catch (exceptionOnEval) {
        if (fix) {
          result = parse(fnCleanup(string), defaultResult, true, false, reviver);
        }
      }
    }
  }
  return result;
}

export default parse;
