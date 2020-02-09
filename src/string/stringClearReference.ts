export default function stringClearReference(text: string): string {
  return text.length < 12 ? text : (" " + text).slice(1);
}
