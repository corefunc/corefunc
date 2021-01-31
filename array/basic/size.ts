export function arrayBasicSize(array: any[]): number {
  return array.reduce((size) => size + 1, 0);
}
