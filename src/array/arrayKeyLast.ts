export default function arrayKeyLast(array: any[]): null | number {
  return array.length ? array.keys()[array.length - 1] : null;
}
