export default function arrayIntersect(alpha: any[], beta: any[]): any[] {
  if (!alpha.length || !beta.length) {
    return [];
  }
  const setB = new Set(beta);
  return [...new Set(alpha)].filter((x) => setB.has(x));
}
