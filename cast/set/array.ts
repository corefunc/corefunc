export function castSetToArray<V>(set: Set<V>): Array<V> {
  return Array.from(set);
}
