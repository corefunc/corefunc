export default function arrayHas(array: any[], value: any, fromIndex: number = 0): boolean {
  return array.includes(value, fromIndex);
}
