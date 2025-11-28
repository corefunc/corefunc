export function castMapToArray<K, V>(map: Map<K, V>): Array<V> {
  return Array.from(map).map(([, val]) => val);
}
