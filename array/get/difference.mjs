export function arrayGetDifference(alpha, beta) {
  const set = new Set(beta);
  return alpha.filter((value) => !set.has(value));
}
