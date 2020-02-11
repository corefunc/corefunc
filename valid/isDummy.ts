import fnIsProper from "./isProper";

/**
 * @param {*} value
 * @returns {boolean}
 */
function isDummy(value) {
  return !fnIsProper(value);
}

export default isDummy;
