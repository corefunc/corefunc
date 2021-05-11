/**
 * @name arrayBasicHasSame
 * @param {Array} alpha
 * @param {Array} beta
 * @returns {boolean}
 * @since 0.1.13
 */
export function arrayBasicHasSame(alpha: any[], beta: any[]): boolean {
  if (!alpha.length || !beta.length) {
    return false;
  }
  const setB = new Set(beta);
  // @ts-ignore
  return Boolean([...new Set(alpha)].filter((x) => setB.has(x)).length);
}
