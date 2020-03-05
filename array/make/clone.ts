export default function arrayMakeClone<T>(array: T[]): T[] {
  return array.slice(0);
}
