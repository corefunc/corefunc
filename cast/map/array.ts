export function castMapToArray(map: Map<any, any>): any[] {
  return Array.from(map).map(([, val]) => val);
}
