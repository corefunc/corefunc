import fnIsString from "lodash-es/isString";
import fnTrim from "lodash-es/trim";

/**
 * @param {*} value
 * @returns {boolean}
 */
function isProper(value) {
  if (value === undefined || value === null || Number.isNaN(value)) {
    return false;
  }
  if (fnIsString(value)) {
    return fnTrim(value).length > 0;
  }
  return !!value;
}

export default isProper;
