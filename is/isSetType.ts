import fnIsSet from "./isSet";
import fnIsWeakSet from "./isWeakSet";

/**
 * @param {*} value
 * @return {boolean}
 */
function isSetType(value) {
  return fnIsSet(value) || fnIsWeakSet(value);
}

export default isSetType;
