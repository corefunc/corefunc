/**
 * @name arrayBasicIntersect
 * @param {Array} alpha
 * @param {Array} beta
 * @returns {Array}
 */
module.exports = function arrayBasicIntersect(alpha, beta) {
  if (!alpha.length || !beta.length) {
    return [];
  }
  const setB = new Set(beta);
  return [...new Set(alpha)].filter((value) => setB.has(value));
};
