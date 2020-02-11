export default function objectPick(object: Object, keys: string[]): Object {
  if (!keys.length || !Object.keys(object).length) {
    return {};
  }
  return keys.reduce((accumulator: Object, key: string) => {
    accumulator[key] = object[key];
    return accumulator;
  }, {});
}
