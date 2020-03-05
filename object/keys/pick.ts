export default function objectKeysPick<T extends Object>(object: T, keys: string[]): Partial<T> {
  if (!keys.length || !Object.keys(object).length) {
    return {};
  }
  return keys.reduce((accumulator: Object, key: string) => {
    accumulator[key] = object[key];
    return accumulator;
  }, {}) as Partial<T>;
}
