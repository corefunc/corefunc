export function arraySymmetricDifference(alpha, beta) {
  return alpha.filter((value) => !beta.includes(value)).concat(beta.filter((value) => !alpha.includes(value)));
}
