const jsonCleanup = require("../cleanup.cjs");
const jsonParseUnsafe = require("./unsafe.cjs");

/**
 * @param {String} text
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Boolean=} fix
 * @param {Function=} reviver
 * @return {*}
 */
module.exports = function jsonParseSafe(text, defaultResult = undefined, unsafe = true, fix = true, reviver = null) {
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
};
