export default function arrayBasicInsert(array: any[], index: number, item: any): any[] {
  return [...array.slice(0, index), item, ...array.slice(index)];
}
