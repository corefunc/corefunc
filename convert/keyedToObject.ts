/**
 * Converts Map to Object
 * @param {Map} map
 * @param {Boolean=true} isDeep
 * @returns {Object}
 */
import fnIsKeyed from "../is/isKeyed";

function keyedToObject(keyed, isDeep = true) {
  const object = {};
  if (isDeep) {
    keyed.forEach((value, key) => {
      if (fnIsKeyed(value)) {
        object[key] = keyedToObject(value, true);
      } else {
        object[key] = value;
      }
    });
  } else {
    keyed.forEach((value, key) => {
      object[key] = value;
    });
  }
  return object;
}

export default keyedToObject;
