export default function arrayGetDiff(alpha: any[], beta: any[]): any[] {
  const set = new Set(beta);
  return alpha.filter((value) => !set.has(value));
}
