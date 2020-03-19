/**
 * @name arrayHasSame
 * @param {Array} alpha
 * @param {Array} beta
 * @returns {boolean}
 */
export default function arrayHasSame(alpha: any[], beta: any[]): boolean {
  if (!alpha.length || !beta.length) {
    return false;
  }
  const setB = new Set(beta);
  return Boolean([...new Set(alpha)].filter((x) => setB.has(x)).length);
}
