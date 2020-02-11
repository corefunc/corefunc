export default function arrayKeyFirst(array: any[]): null | number {
  return array.length ? array.keys()[0] : null;
}
