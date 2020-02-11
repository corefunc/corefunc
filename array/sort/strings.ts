export default function arraySortStrings(array: string[]): string[] {
  return array.sort((a, b) => a.localeCompare(b));
}
