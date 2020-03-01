/**
 * @param {...} conditions
 * @returns {boolean}
 */
function isAllFalse(...conditions) {
  return !conditions.map((condition) => Boolean(condition)).includes(true);
}

export default isAllFalse;
