import fnIsEmpty from "lodash-es/isEmpty";

/**
 * @param {...} variables
 * @returns {boolean}
 */
function isAllEmpty(...variables) {
  return variables.every((variable) => fnIsEmpty(variable));
}

export default isAllEmpty;
