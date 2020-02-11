import fnIsArray from "lodash-es/isArray";
import fnIsRegExp from "lodash-es/isRegExp";
import fnIsString from "lodash-es/isString";

/**
 * @param pattern {Array|RegExp|String}
 * @return {Boolean|RegExp}
 */
function toRegExp(pattern) {
  if (fnIsRegExp(pattern)) {
    return pattern;
  }
  if (fnIsString(pattern)) {
    return new RegExp(pattern);
  }
  if (fnIsArray(pattern)) {
    if (fnIsString(pattern[0]) === false) {
      return false;
    }
    if (fnIsString(pattern[1]) === true) {
      return new RegExp(pattern[0], pattern[1]);
    }
    return new RegExp(pattern[0]);
  }
  return false;
}

export default toRegExp;
