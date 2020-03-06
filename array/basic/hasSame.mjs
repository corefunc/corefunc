export default function arrayHasSame(alpha, beta) {
  if (!alpha.length || !beta.length) {
    return false;
  }
  const setB = new Set(beta);
  return Boolean([...new Set(alpha)].filter((x) => setB.has(x)).length);
}
