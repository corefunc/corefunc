import fnIsSetType from "./isSetType";
import fnIsMapType from "./isMapType";

/**
 * @param {*} value
 * @return {boolean}
 */
function isKeyed(value) {
  return fnIsSetType(value) || fnIsMapType(value);
}

export default isKeyed;
