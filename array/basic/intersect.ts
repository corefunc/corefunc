export default function arrayBasicIntersect(alpha: any[], beta: any[]): any[] {
  if (!alpha.length || !beta.length) {
    return [];
  }
  const setB = new Set(beta);
  return [...new Set(alpha)].filter((value) => setB.has(value));
}
