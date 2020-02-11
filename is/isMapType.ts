import fnIsMap from "./isMap";
import fnIsWeakMap from "./isWeakMap";

/**
 * @param {*} value
 * @return {boolean}
 */
function isMapType(value) {
  return fnIsMap(value) || fnIsWeakMap(value);
}

export default isMapType;
