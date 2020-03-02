export default function stringClearReferences(text) {
  if (text.length < 12) {
    return text;
  }
  return (" " + text).slice(1);
}
