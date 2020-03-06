export default function arrayBasicExtend(alpha: any[], beta: any[]): any[] {
  const extendedArray = alpha.slice(0);
  extendedArray.push(...beta.slice(0));
  return extendedArray;
}
