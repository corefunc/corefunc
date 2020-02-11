/**
 * @param {...} conditions
 * @returns {boolean}
 * @example import fnIsAllTrue from '@selfserve/utility/valid/isAllFalse';
 */
function isAllFalse(...conditions) {
  return !conditions.map(condition => !!condition).includes(true);
}

export default isAllFalse;
