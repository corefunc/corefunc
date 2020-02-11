import fnIsString from "lodash-es/isString";
import fnToString from "lodash-es/toString";

import fnToRegExp from "../cast/toRegExp";

/**
 * Executes a search for a match between a regular expression and a specified string.
 * @param {String} string
 * @param {Array|RegExp|String} pattern
 * @param {*=false} onFail
 * @return {Boolean}
 */
function regexMatch(string, pattern, onFail = false) {
  if (fnIsString(string) === false) {
    return onFail;
  }
  const regexp = fnToRegExp(pattern);
  if (regexp === false) {
    return onFail;
  }
  return regexp.test(fnToString(string));
}

export default regexMatch;
