/**
 * @name arrayBasicIntersect
 * @param {Array} alpha
 * @param {Array} beta
 * @returns {Array}
 */
export default function arrayBasicIntersect(alpha: any[], beta: any[]): any[] {
  if (!alpha.length || !beta.length) {
    return [];
  }
  const setB = new Set(beta);
  // @ts-ignore
  return [...new Set(alpha)].filter((value) => setB.has(value));
}
