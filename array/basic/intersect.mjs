/**
 * @name arrayBasicIntersect
 * @param {Array} alpha
 * @param {Array} beta
 * @returns {Array}
 */
export function arrayBasicIntersect(alpha, beta) {
  if (!alpha.length || !beta.length) {
    return [];
  }
  const setB = new Set(beta);
  return [...new Set(alpha)].filter((value) => setB.has(value));
}
