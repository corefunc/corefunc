/**
 * @param {...} conditions
 * @returns {boolean}
 * @example import fnIsAllTrue from '@selfserve/utility/valid/isAllTrue';
 */
function isAllTrue(...conditions) {
  return !conditions.map(condition => !!condition).includes(false);
}

export default isAllTrue;
