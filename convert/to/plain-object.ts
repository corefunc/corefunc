export function convertToPlainObject(object: object): object {
  return JSON.parse(JSON.stringify(object));
}
