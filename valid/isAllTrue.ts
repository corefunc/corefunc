/**
 * @param {...} conditions
 * @returns {boolean}
 */
function isAllTrue(...conditions) {
  return !conditions.map((condition) => !!condition).includes(false);
}

export default isAllTrue;
