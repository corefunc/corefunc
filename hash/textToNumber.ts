export function hashTextToNumber(text: string): number {
  let hash = 5381;
  let index = text.length;
  while (index) {
    hash = (hash * 33) ^ text.charCodeAt(--index);
  }
  return hash >>> 0;
}
