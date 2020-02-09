import fnIsEmpty from "lodash-es/isEmpty";

/**
 * @param {...} variables
 * @returns {boolean}
 */
function isAllNotEmpty(...variables) {
  return variables.every(variable => !fnIsEmpty(variable));
}

export default isAllNotEmpty;
