export default function arraySortStrings(array: any[]): any[] {
  return array.sort((a, b) => a.localeCompare(b));
}
