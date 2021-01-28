export function stringClearReferences(text: string): string {
  if (text.length < 12) {
    return text;
  }
  return (" " + text).slice(1);
}
