export default function arrayBasicHas(array: any[], value: any, fromIndex: number = 0): boolean {
  return array.includes(value, fromIndex);
}
