/**
 * @param {...} conditions
 * @returns {boolean}
 */
function isAllFalse(...conditions) {
  return !conditions.map(condition => !!condition).includes(true);
}

export default isAllFalse;
