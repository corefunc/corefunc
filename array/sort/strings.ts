export default function arraySortStrings(array: string[]): string[] {
  return array.sort((alpha, beta) => alpha.localeCompare(beta));
}
