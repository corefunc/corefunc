export default function castMapToArray(map: Map<string, any>): any[] {
  return Array.from(map).map(([, val]) => val);
}
