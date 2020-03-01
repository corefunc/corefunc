export default function arraySymDiff(alpha: any[], beta: any[]): any[] {
  return alpha.filter((value) => !beta.includes(value)).concat(beta.filter((value) => !alpha.includes(value)));
}
