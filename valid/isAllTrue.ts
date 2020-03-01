/**
 * @param {...} conditions
 * @returns {boolean}
 */
function isAllTrue(...conditions) {
  return !conditions.map((condition) => Boolean(condition)).includes(false);
}

export default isAllTrue;
