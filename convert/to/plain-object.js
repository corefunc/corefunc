export function convertToPlainObject(object) {
  return JSON.parse(JSON.stringify(object));
}
