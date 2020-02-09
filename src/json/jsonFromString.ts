import fnParse from "./parse";

/**
 * @param {String} string
 * @param {*=} defaultResult
 * @param {Boolean=} unsafe
 * @param {Function=} reviver
 * @return {Object}
 */
function jsonFromString(string, defaultResult?, unsafe = true, reviver?) {
  return fnParse(string, defaultResult, unsafe, reviver);
}

export default jsonFromString;
